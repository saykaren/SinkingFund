interface monthDataProps {
    title: string;
    cost: number;
    monthIN: number;
}

interface monthContributionsProps {
    title: string;
    contribution: number;
    monthIN: number
}

export interface TestDataProps {
    monthId: number;
    monthName: string;
    begBalance: number;
    endBalance: number;
    monthData?: Array<monthDataProps>;
    monthContributions?: Array<monthContributionsProps>;
}

export interface dataProps {
    data: Array<TestDataProps>
}

export default dataProps;