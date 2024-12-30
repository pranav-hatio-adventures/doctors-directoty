import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Chip } from "@nextui-org/chip";
import { TableADataRecord } from "../../types/global.type";
import { MODE_ENUM } from "../../types/enums";
import { districtsWithCode } from "../utils/data/district.data";
import { EyeFilledIcon, EyeSlashFilledIcon } from "../svgIcons";

/**
 * A Card component that displays a single doctor's information, including their image, name, district, mode (online/offline), and specialisation.
 *
 * @param {TableADataRecord} props
 * @returns {JSX.Element}
 */
function UserCard(props: TableADataRecord) {
  /**
   * A function that returns a Chip component with the given mode (online/offline/onlineoffline),
   * colored accordingly (green for online, red for offline, yellow for onlineoffline).
   * If the mode is not recognized, it returns an empty fragment.
   * @param {MODE_ENUM} mode
   * @returns {JSX.Element}
   */
  const modeChipSelect = (mode: MODE_ENUM) => {
    const chip = (color: "success" | "danger" | "warning", mode: MODE_ENUM) => (
      <Chip
        size="sm"
        variant="shadow"
        className="absolute right-2 top-2 rounded-md"
        color={color}
      >
        {mode}
      </Chip>
    );

    switch (mode) {
      case MODE_ENUM.ONLINE:
        return chip("success", mode);
      case MODE_ENUM.OFFLINE:
        return chip("danger", mode);
      case MODE_ENUM.ONLINEANDOFFLINE:
        return chip("warning", mode);
      default:
        return <></>;
    }
  };

  /**
   * Renders an AccordionItem component displaying a list of specializations.
   * Each specialization is shown as a Chip component.
   * If no specializations are provided, it returns an empty fragment.
   *
   * @param {Array<string>} specialization - An array of specialization strings.
   * @returns {JSX.Element} An AccordionItem with specialization Chips or an empty fragment if no specialization is given.
   */
  /**
   * Renders an AccordionItem component displaying a list of specializations.
   * Each specialization is shown as a Chip component.
   * If no specializations are provided, it returns an empty fragment.
   *
   * @param {Array<string>} specialization - An array of specialization strings.
   * @returns {JSX.Element} An AccordionItem with specialization Chips or an empty fragment if no specialization is given.
   */
  const specializationDisplay = (specialization: Array<string>) => {
    if (!specialization || specialization.length == 0) return <></>;
    else
      return (
        <AccordionItem
          key="specialisation"
          aria-label="Specialisation"
          title="Specialisation"
        >
          <div className="flex max-w-full flex-wrap gap-2 scrollbar-hide">
            {specialization.map((spec) => (
              <Chip size="sm" className="text-[10px]" color="primary">
                {spec}
              </Chip>
            ))}
          </div>
        </AccordionItem>
      );
  };

  /**
   * Renders an AccordionItem component displaying the contact details of a user.
   * If all contact details are empty, it returns an empty fragment.
   * The contact details are displayed in a column, with each detail on a
   * separate line. The phone, email, otherContactDetails, and otherLinks are
   * displayed in that order.
   * @param {string} phone - The phone number of the user.
   * @param {string} email - The email of the user.
   * @param {string} otherContactDetails - The other contact details of the user.
   * @param {string} otherLinks - The other links of the user.
   * @returns {JSX.Element} An AccordionItem with contact details or an empty fragment if all contact details are empty.
   */
  const contactDetails = (
    phone: string,
    email: string,
    otherContactDetails: string,
    otherLinks: string
  ) => {
    if (!phone && !email && !otherContactDetails && !otherLinks) return <></>;
    else
      return (
        <AccordionItem
          key="contactDetails"
          aria-label="Contact Details"
          title="Contact Details"
          onPress={(e) => console.log(e)}
          indicator={({ isOpen }) =>
            isOpen ? <EyeFilledIcon /> : <EyeSlashFilledIcon />
          }
        >
          <div className="flex flex-col gap-2">
            {phone && (
              <div className="flex flex-col gap-1 text-sm">
                <span className="font-semibold">Phone:</span> {phone}
              </div>
            )}
            {email && (
              <div className="flex flex-col gap-1 text-sm">
                <span className="font-semibold">Email:</span> {email}
              </div>
            )}
            {otherContactDetails && (
              <div className="flex flex-col gap-1 text-sm">
                <span className="font-semibold">Other Contact Details:</span>{" "}
                {otherContactDetails}
              </div>
            )}
            {otherLinks && (
              <div className="flex flex-col gap-1 text-sm">
                <span className="font-semibold">Other Links:</span> {otherLinks}
              </div>
            )}
          </div>
        </AccordionItem>
      );
  };

  return (
    <Card
      shadow="none"
      classNames={{ base: "border max-w-[300px] min-w-[300px] p-2 gap-3" }}
      key={props.id}
    >
      <CardHeader className="relative flex justify-center p-0">
        {modeChipSelect(props.fields.mode)}
        <img
          src={props.fields.image[0].url}
          className="aspect-square w-full rounded-md border object-cover"
        />
        <Chip
          size="sm"
          className="absolute bottom-2 left-2 rounded-md"
          color="primary"
        >
          {props.fields.type}
        </Chip>
      </CardHeader>
      <CardBody className="gap-2 p-0">
        <Chip
          size="sm"
          className="rounded"
          title={districtsWithCode[props.fields.district]}
        >
          <span className="line-clamp-1 truncate">
            {districtsWithCode[props.fields.district]}
          </span>
        </Chip>
        <div className="flex w-full gap-1">
          <h2
            className="line-clamp-1 max-w-full font-semibold"
            title={props.fields.name}
          >
            {props.fields.name}
          </h2>
        </div>

        <Accordion
          isCompact
          variant="light"
          selectionMode="multiple"
          defaultExpandedKeys={["specialisation"]}
          itemClasses={{ title: "text-xs" }}
        >
          {specializationDisplay(props.fields.specialisation)}
          {contactDetails(
            props.fields.phone,
            props.fields.email,
            props.fields.otherContactDetails,
            props.fields.otherLinks
          )}
        </Accordion>
      </CardBody>
    </Card>
  );
}

export default UserCard;
