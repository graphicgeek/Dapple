describe('Dapple.day', function () {
    var dapple,
        dappleWithDatePassed,
        startDate;

    beforeEach(function () {
        startDate = new Date(1985, 1, 15, 0, 0, 0, 0);
        dapple = new Dapple();
        dappleWithDatePassed = new Dapple(startDate);
    });

    it('Should exist', function () {
        expect(dapple.day).not.toBe(undefined);
    });

    describe('.next', function () {
        it('Should exist', function () {
            expect(dapple.day.next).not.toBe(undefined);
        });

        it('Should move the internal date forward 1 day', function() {
            dappleWithDatePassed.day.next();
            var expected = new Date(1985, 1, 16, 0, 0, 0 , 0);
            expect(dappleWithDatePassed.date).toEqual(expected);
        });
    });

    describe('.previous', function () {
        it('Should exist', function () {
            expect(dapple.day.previous).not.toBe(undefined);
        });

        it('Should move the internal date backwards 1 day', function() {
            dappleWithDatePassed.day.previous();
            var expected = new Date(1985, 1, 14, 0, 0, 0 , 0);
            expect(dappleWithDatePassed.date).toEqual(expected);
        });
    });

    describe('.travel', function() {
        it('Should exist', function() {
            expect(dapple.day.travel).not.toBe(undefined);
        });

        it('Should move 10 days forward', function() {
            dappleWithDatePassed.day.travel(10);
            var expected = new Date(1985, 1, 25, 0, 0, 0 , 0);
            expect(dappleWithDatePassed.date).toEqual(expected);
        });

        it('Should move 10 days backwards', function() {
            dappleWithDatePassed.day.travel(-10);
            var expected = new Date(1985, 1, 5, 0, 0, 0 , 0);
            expect(dappleWithDatePassed.date).toEqual(expected);
        });
    });

    describe('.beginning', function() {
        it('Should exist', function() {
            expect(dapple.day.beginning).not.toBe(undefined);
        });;
    });
});