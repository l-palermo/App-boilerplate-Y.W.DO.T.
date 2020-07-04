import React from 'react';

import App from './app';

const setupTest = () => render(<App />);

describe('App', () => {
    afterEach(cleanup);

    it('should renders the react logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('react logo')).toBeVisible();
    });
    it('should renders a title', () => {
        const { getByText } = setupTest();
        expect(getByText('React App Boilerplate')).toBeVisible();
    });
    it('should renders a description', () => {
        const { getByText } = setupTest();
        const text = 'This application uses the following tools:';
        expect(getByText(text)).toBeVisible();
    });
    it('sould render the logos', () => {
        const { getAllByRole } = setupTest();
        expect(getAllByRole('img')).toHaveLength(11);
    });
    it('sould render the yarn logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('yarn logo')).toBeVisible();
    });
    it('sould render the webpack logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('webpack logo')).toBeVisible();
    });
    it('sould render the webpack logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('babel logo')).toBeVisible();
    });
    it('sould render the testing library logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('testing library logo')).toBeVisible();
    });
    it('sould render the jest logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('jest logo')).toBeVisible();
    });
    it('sould render the eslint logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('eslint logo')).toBeVisible();
    });
    it('sould render the stylelint logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('stylelint logo')).toBeVisible();
    });
    it('sould render the linaria logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('linaria logo')).toBeVisible();
    });
    it('sould render the circleci logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('circleci logo')).toBeVisible();
    });
    it('sould render the vercel logo', () => {
        const { getByAltText } = setupTest();
        expect(getByAltText('vercel logo')).toBeVisible();
    });
});
