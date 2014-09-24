var Dapple = (function(){
    TimeUnits = {
        millisecond: 1,
        second: 1000,
        minute: 1000 * 60,
        hour: (1000 * 60) * 60,
        day: ((1000 * 60) * 60) * 24,
        week: (((1000 * 60) * 60) * 24) * 7,
        year: (((1000 * 60) * 60) * 24) * 365
    };

    function fromNow(unit, interval, date) {
        var now = (date) ? date : new Date();
        var alteredDate;

        if (unit == 'month') {
            var newDate = new Date(now.getTime());
                newDate.setMonth(now.getMonth() + interval);
            alteredDate = newDate;
        } else {
            alteredDate = new Date(now.getTime() + (unit * interval));
        }

        return alteredDate;
    };

    Year = {
        first_day: function(date) {
            var now = (date) ? date : new Date();
                now.setDate(1);
                now.setMonth(0);
                now.setHours(0);
                now.setMinutes(0);
                now.setSeconds(0);

            return now;
        },
        last_day: function() {
            var now = (date) ? date : new Date();
                now.setMonth(12);
                now.setDate(0);

            return now;
        }
    };

    Month = {
      first_day: function(date){
          var now = (date) ? date : new Date();
            now.setDate(1);

          return now;
      },
      last_day: function(date){
          var now = (date) ? date : new Date();
            now.setMonth(now.getMonth() + 1);
            now.setDate(0);

          return now;
      }
    };

    Week = {
        first_day: function() {

        },
        last_day: function() {

        }
    };

    Day = {
        beginning: function(date) {
            var now = (date) ? date : new Date();
                now.setHours(0);
                now.setMinutes(0);
                now.setSeconds(0);

            return now;
        },
        end: function(date) {
            var now = (date) ? date : new Date();
                now.setHours(23);
                now.setMinutes(59);
                now.setSeconds(59);

            return now;
        },
        of_week: function(length, date) {
            var now = (date) ? date : new Date();
            var weekday = null;

            if (length == 'short') {
                weekday = Day.days.short[now.getDay()];
            } else {
                weekday = Day.days.long[now.getDay()];
            }

            return weekday;
        },
        days: {
            short: [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat'
            ],
            long: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ]
        }
    };

    Calc = {
        years: {
            till_end_of_century: function() {

            },
            till_end_of_millennium: function() {

            }
        },
        months: {
            till_end_of_year: function() {

            },
            of_the_year: function() {

            }
        },
        weeks: {
            till_end_of_month: function() {

            },
            till_end_of_year: function() {

            },
            of_the_year: function() {

            }
        },
        days: {
            till_end_of_year: function() {

            },
            till_end_of_month: function() {

            },
            till_end_of_week: function() {

            },
            of_the_month: function() {

            },
            of_the_year: function() {

            }
        }
    };

    function Dapple(date) {
        // accept date object and wrap it...
        // accept timestamp and wrap it...

        this.date = (date) ? date : new Date();
        this.time = function(){ return this.date.getTime() };

        this.forward = function(unit, interval) {
            this.date = Dapple.forward(this.date, unit, interval);
        };

        this.backward = function(unit, interval) {
            if (unit == 'month') {
                this.date = fromNow('month', -(interval), this.date);
            } else {
                this.date = fromNow(TimeUnits[unit], -(interval), this.date);
            }
        };

        this.next = function(unit) {
            if (unit == 'month') {
                this.date = fromNow('month', 1, this.date);
            } else {
                this.date = fromNow(TimeUnits[unit], 1, this.date);
            }
        };

        this.previous = function(unit) {
            if (unit == 'month') {
                this.date = fromNow('month', -(1), this.date);
            } else {
                this.date = fromNow(TimeUnits[unit], -(1), this.date);
            }
        };
    }

    Dapple.forward = function(date, unit, interval) {
        var returnDate;

        if (unit == 'month') {
            returnDate = fromNow('month', interval, date);
        } else {
            returnDate = fromNow(TimeUnits[unit], interval, date);
        }

        return returnDate;
    };

    return Dapple;
})();