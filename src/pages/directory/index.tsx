import { Select, SelectItem } from "@nextui-org/select";
import { districtData } from "../../common/utils/data/district.data";
import { useGetTableAData } from "../../api/tableA/tableA.query";
import { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/progress";
import UserCard from "../../common/components/UserCard";
// import { specialisationData } from "../../common/utils/data/specialisationData";
import Button from "../../common/components/Button";

function Directory() {
  const [selectedDistrictCode, setSelectedDistrictCode] = useState("");
  // const [selectedSpecialisation, setSelectedSpecialisation] = useState<
  //   Array<string>
  // >([]);
  const [offset, setOffset] = useState<string>("");

  const { data, mutate, error, isPending } = useGetTableAData();

  const onSubmit = () => {
    mutate({
      selectedDistrictCode,
      //TODO uncomment when specialization is being used
      // selectedSpecialisation,
      offset,
    });
  };

  useEffect(() => {
    if (data?.offset) setOffset(data?.offset);
    else setOffset("");
  }, [data?.offset]);

  if (error) return <div>Error</div>;
  return (
    <div className="bg-secondary-color py-10 px-4">
      <div className="container mx-auto flex gap-4 flex-wrap">
        <div className="flex flex-col gap-4 w-full bg-white px-5 py-8 shadow-md rounded-xl h-fit md:min-w-80 md:w-fit">
          <Select
            isRequired
            className="bg-secondary-color"
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
          {/* Specialisation Select is disabled for now */}
          {/* <Select
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
          </Select> */}
          <Button
            buttonClassName="flex gap-2 justify-center items-center"
            label={isPending ? "Loading..." : offset ? "Refresh" : "Submit"}
            onClick={() => onSubmit()}
            rightSection={
              isPending && <CircularProgress aria-label="Loading..." />
            }
          />
        </div>
        <div className="flex flex-1 gap-4 align-top w-full flex-wrap md:min-w-80 min-h-[500px]">
          {data && data.records.length > 0 ? (
            data?.records.map((record) => (
              <div className="flex justify-center">
                <UserCard {...record} />
              </div>
            ))
          ) : isPending ? (
            <div>Loading</div>
          ) : (
            <div>
              <div>
                {selectedDistrictCode !== "" && data
                  ? "This location dosent contain any professionals. Try selecting a different location"
                  : "Select a location to continue"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Directory;
