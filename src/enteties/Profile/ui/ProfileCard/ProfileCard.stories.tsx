import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'enteties/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.Armenia,
        lastname: 'Nafikov',
        first: 'Radimir',
        city: 'Belebey',
        currency: Currency.EUR,
    },
};
export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
