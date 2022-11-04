import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
    theme: TextTheme.ERROR,
};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
    title: 'Title lorem ipsum',
};

export const TextOnly = Template.bind({});
TextOnly.args = {
    text: 'Text lorem ipsum',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleOnlyDark = Template.bind({});
TitleOnlyDark.args = {
    title: 'Title lorem ipsum',
};
TitleOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextOnlyDark = Template.bind({});
TextOnlyDark.args = {
    text: 'Text lorem ipsum',
};
TextOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];
