import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';

import 'moment/locale/ja';
import 'moment/locale/ar';
import 'moment/locale/it';
import 'moment/locale/pt-br';

export class CalendarScreen extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);

        this.state = {
            locale: 'en',
            selectedDays: []
        };
    }

    handleSelectChange(e) {
        this.setState({
            locale: e.target.value,
        });
    }

    handleDayClick(day, { selected }) {
        const selectedDays = this.state.selectedDays.concat();
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }
        this.setState({ selectedDays });
    }

    render() {
        return (
            <div>
                <p>
                    <select onChange={this.handleSelectChange}>
                        <option value="en">English</option>
                        <option value="ja">Japanese</option>
                        <option value="ar">Arabic</option>
                        <option value="it">Italian</option>
                        <option value="pt-br">Português Brasil</option>
                    </select>
                </p>
                <DayPicker
                    localeUtils={MomentLocaleUtils}
                    locale={this.state.locale}
                    selectedDays={this.state.selectedDays}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }
}

