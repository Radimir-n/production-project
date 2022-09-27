import { describe, expect, test } from '@jest/globals';
import { classNames } from './classNames';

describe('className', () => {
    test('classNames with 1 params', () => {
        expect(classNames('class')).toBe('class');
    });
    test('classNames with mods', () => {
        expect(classNames('class', { hovered: true, active: false })).toBe('class hovered');
    });
    test('classNames with additionals', () => {
        expect(classNames('class', {}, ['cls cls2'])).toBe('class cls cls2');
    });
    test('classNames with mods and additionals', () => {
        expect(classNames('class', { hovered: true, active: false }, ['cls3', 'cls4'])).toBe('class hovered cls3 cls4');
    });
    test('classNames with undefined mods', () => {
        expect(classNames('class', { hovered: true, active: undefined }, ['cls3', 'cls4'])).toBe('class hovered cls3 cls4');
    });
});
