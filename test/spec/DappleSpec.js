describe('Dapple', function() {3
    var dapple,
        dappleWithDatePassed,
        startDate;

    beforeEach(function() {
        startDate = new Date(1985, 1, 15, 0, 0, 0, 0);
        dapple = new Dapple();
        dappleWithDatePassed = new Dapple(startDate);
    });

    describe('Constructor', function() {
        it('Should create an internal instance of date', function() {
            expect(dapple.date).not.toBe(undefined);
            expect(dapple.date).not.toBe(null);
        });

        it('Should create a function to get the date timestamp', function() {
            expect(dapple.time()).toBeGreaterThan(startDate.getTime());
        });
    });

    describe('Constructor with date given', function() {
        it('Should use the date passed in if present', function() {
            expect(dappleWithDatePassed.date).toEqual(startDate);
        });
    });

    describe('Method: forward', function() {
        it('Should increase the date by one millisecond', function() {
            dappleWithDatePassed.forward('millisecond', 1);
            expected = new Date(1985, 1, 15, 0, 0, 0, 1);
            expect(dappleWithDatePassed.date).toEqual(expected);
        });

        it('Should increase the date by one second', function() {
            dappleWithDatePassed.forward('second', 1);
            expected = new Date(1985, 1, 15, 0, 0, 1, 0);
            expect(dappleWithDatePassed.date).toEqual(expected);
        });

        it('Should increase the date by one minute', function() {
            dappleWithDatePassed.forward('minute', 1);
            expected = new Date(1985, 1, 15, 0, 1, 0, 0);
            expect(dappleWithDatePassed.date).toEqual(expected);
        });

        it('Should increase the date by one hour', function() {
            dappleWithDatePassed.forward('hour', 1);
            expected = new Date(1985, 1, 15, 1, 0, 0, 0);
            expect(dappleWithDatePassed.date).toEqual(expected);
        });

        it('Should increase the date by one day', function() {
            dappleWithDatePassed.forward('day', 1);
            expected = new Date(1985, 1, 16, 0, 0, 0, 0);
            expect(dappleWithDatePassed.date).toEqual(expected);
        });

        it('Should increase the date by one month', function() {
            dappleWithDatePassed.forward('month', 1);
            expected = new Date(1985, 2, 15, 0, 0, 0, 0);
            expect(dappleWithDatePassed.date).toEqual(expected);
        });

        it('Should increase the date by one year', function() {
            dappleWithDatePassed.forward('year', 1);
            expected = new Date(1986, 1, 15, 0, 0, 0, 0);
            expect(dappleWithDatePassed.date).toEqual(expected);
        });
    });
});