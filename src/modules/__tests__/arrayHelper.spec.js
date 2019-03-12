import { addItem, updateItem, removeItem, moveItem } from '../arrayHelper';

const srcArr = ['sokker', 'og', 'sko'];

describe('modules -> arrayHelper: ', () => {
    describe('fn: addItem ', () => {
        it('should add the passed in item and return a new array', () => {
            const expectedResult = ['sokker', 'og', 'sko', 'og'];
            const actualResult = addItem(srcArr, 'og');

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('fn: updateItem ', () => {
        it('should change the name of the item at the passed in index', () => {
            const expectedResult = ['sokker', 'don corleone', 'sko'];
            const actualResult = updateItem(srcArr, 1, 'don corleone');

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('fn: removeItem ', () => {
        it('should remove the passed in item from the passed in array', () => {
            const expectedResult = ['sokker', 'sko'];
            const actualResult = removeItem(srcArr, 1);

            expect(actualResult).toEqual(expectedResult);
        });

    });

    describe('fn: moveItem ', () => {
        it('should move the item from sourceArr to destArr', () => {
            const state = {
                completed: [],
                inProgress: ['twitch', 'og', 'og', 'bananer'],
            };

            const expectedResult = {
                completed: ['og'],
                inProgress: ['twitch', 'og', 'bananer'],
            };
            
            const actualResult = moveItem(state, 'inProgress', 'completed', 2);

            expect(actualResult).toEqual(expectedResult);
        });
    });
})