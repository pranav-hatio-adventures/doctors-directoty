import { Select, SelectItem } from "@nextui-org/select";
import PageLayout from "../common/PageLayout";
import { districtData } from "../common/utils/data/district.data";
import { useGetTableAData } from "../api/tableA/tableA.query";
import { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/progress";
import UserCard from "../common/components/UserCard";
import { specialisationData } from "../common/utils/data/specialisationData";
import { Button } from "@nextui-org/button";

function Directory() {
  const [selectedDistrictCode, setSelectedDistrictCode] = useState("");
  const [selectedSpecialisation, setSelectedSpecialisation] = useState<
    Array<string>
  >([]);
  const [offset, setOffset] = useState<string>("");

  const { data, mutate, error, isPending } = useGetTableAData();

  const onSubmit = () => {
    mutate({
      selectedDistrictCode,
      selectedSpecialisation,
      offset,
    });
  };

  useEffect(() => {
    if (data?.offset) setOffset(data?.offset);
    else setOffset("");
  }, [data?.offset]);

  if (error) return <div>Error</div>;
  return (
    <PageLayout>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Select
            isRequired
            label="location"
            selectedKeys={[`${selectedDistrictCode}`]}
            onChange={(e) => {
              setSelectedDistrictCode(e.target.value);
              setOffset("");
            }}
          >
            {districtData.map((d) => (
              <SelectItem key={d.key}>{d.label}</SelectItem>
            ))}
          </Select>
          <Select
            selectionMode="multiple"
            label="specialisation"
            selectedKeys={selectedSpecialisation}
            onChange={(e) => {
              const updated = e.target.value.split(`,`);
              if (updated.length == 1 && updated[0].length == 0) {
                setSelectedSpecialisation([]);
              } else {
                setSelectedSpecialisation(updated);
              }
              setOffset("");
            }}
          >
            {specialisationData.map((s) => (
              <SelectItem key={s}>{s}</SelectItem>
            ))}
          </Select>
          <div className="flex justify-end">
            <Button onPress={() => onSubmit()} variant="solid" color="primary">
              {isPending ? (
                <CircularProgress aria-label="Loading..." size="sm" />
              ) : offset ? (
                "Refresh"
              ) : (
                "Submit"
              )}
            </Button>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-4 align-top">
          {data?.records.map((record) => (
            <div className="flex justify-center">
              <UserCard {...record} />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default Directory;
