import { Spinner } from "../../ui";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    settings: {
      min_booking_length: minBookingLength,
      max_booking_length: maxBookingLength,
      max_guests_per_booking: maxGuestsPerBooking,
      breakfast_price: breakfastPrice,
    } = {},
    isPending,
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  function handleUpdate(e, field) {
    const value = e.target.value;

    if (!value) return;
    updateSetting({ [field]: value });
  }

  if (isPending) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={minBookingLength}
          onBlur={e => handleUpdate(e, "min_booking_length")}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          onBlur={e => handleUpdate(e, "max_booking_length")}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          disabled={isUpdating}
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          onBlur={e => handleUpdate(e, "max_guests_per_booking")}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          disabled={isUpdating}
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={e => handleUpdate(e, "breakfast_price")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
