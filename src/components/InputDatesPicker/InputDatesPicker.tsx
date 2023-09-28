import DatePicker, { registerLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';

import './InputDatesPicker.scss';

interface InputDatesPickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
}

function InputDatesPicker({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: InputDatesPickerProps) {
  registerLocale('fr', fr);

  return (
    <>
      {/* Start Date Input */}
      <div className="field-date">
        <label className="field-date-label" htmlFor="date_start">
          Date de début
        </label>
        <div className="field-date-container">
          <i className="field-date-icon fa-solid fa-calendar" />
          <DatePicker
            className="field-date-input"
            selected={startDate}
            onChange={onStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Date de début (jj/mm/aaaa)"
            dateFormat="dd/MM/yyyy"
            locale="fr" // Set french locale
          />
        </div>
      </div>
      {/* End Date Input */}
      <div className="field-date">
        <label className="field-date-label" htmlFor="date_start">
          Date de fin
        </label>
        <div className="field-date-container">
          <i className="field-date-icon fa-solid fa-calendar" />
          <DatePicker
            className="field-date-input"
            selected={endDate}
            onChange={onEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Date de fin (jj/mm/aaaa)"
            dateFormat="dd/MM/yyyy"
            locale="fr" // Set french locale
          />
        </div>
      </div>
    </>
  );
}

export default InputDatesPicker;
