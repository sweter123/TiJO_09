describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should return false if arguments are invalid', function () {
            expect(answer.calculateArea(9,8,7,6,5)).toEqual(false);
            expect(answer.calculateArea(1,'tak',3,4,5)).toEqual(false);
            expect(answer.calculateArea(1,'44',3,4,5)).toEqual(false);
            expect(answer.calculateArea(-1,2,3,'4',5)).toEqual(false);
            expect(answer.calculateArea('',2,3,'4','5')).toEqual(false);
            expect(answer.calculateArea('','','','4','')).toEqual(false);
            expect(answer.calculateArea('',1,'',1,'')).toEqual(false);
            expect(answer.calculateArea('',1,true,1,'')).toEqual(false);
        });
        it('should return value and succes message id value is more than zero',function(){
            expect(answer.calculateArea(1,2,1,'Success','Error')).toEqual({area: 1, message: 'Success'});
            expect(answer.calculateArea(3,7,2,'tak','nie')).toEqual({area: 1, message: 'tak'});
            expect(answer.calculateArea(10,2,1,'a moze jednak','nie')).toEqual({area: 8, message: 'a moze jednak'});
            expect(answer.calculateArea(6,19,2,'nie lubie tych','testow')).toEqual({area: 7, message: 'nie lubie tych'});
            expect(answer.calculateArea(10,9,1,'czasami','a czasami nie')).toEqual({area: 1, message: 'czasami'});
            expect(answer.calculateArea(-10,14,-1,'czasami','a czasami nie')).toEqual({area: 4, message: 'czasami'});
        });
        it('should return value and Big null message if value equals zero',function() {
            expect(answer.calculateArea(4,2,2,'Success','Error')).toEqual({area: 0, message: 'Big null'});
            expect(answer.calculateArea(1,1,1,'Success','Error')).toEqual({area: 0, message: 'Big null'});
            expect(answer.calculateArea(12,3,4,'Success','Error')).toEqual({area: 0, message: 'Big null'});
            expect(answer.calculateArea(3,15,5,'Success','Error')).toEqual({area: 0, message: 'Big null'});
        });
        it('should return value and Error message if value below zero',function() {
            expect(answer.calculateArea(4,4,2,'Success','Error')).toEqual({area: -4, message: 'Error'});
            expect(answer.calculateArea(4,6,2,'Success','Error')).toEqual({area: -2, message: 'Error'});
            expect(answer.calculateArea(12,13,2,'Success','Error')).toEqual({area: -11, message: 'Error'});
            expect(answer.calculateArea(5,3,4,'Success','Error')).toEqual({area: -7, message: 'Error'});
        });
    });
});
