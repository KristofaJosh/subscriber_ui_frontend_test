import React from 'react';
import ToDoList from './ToDoList';
import axios from 'axios';

jest.mock('axios');

describe('ToDoList composite', () => {
    describe('when rendered', () => {
        it('should fetch a list of tasks', () => {
            const getSpy = jest.spyOn(axios, 'get');
            const toDoListInstance = shallow(
                <ToDoList/>
            );
            expect(getSpy).toBeCalled();
        });
    });
});