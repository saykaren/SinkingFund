

export interface TestDataProps {
    monthId: number,
    monthName: string,
    begBalance: number,
    endBalance: number,
    monthData: [{
        title: string,
        cost: number,
        monthIn: number,
    }],
    monthContributions?: [{title: string, cost: number, monthIN: number}]
}
export const TestData =
    [
        {
            monthId: 1,
            monthName: 'January',
            begBalance: 4000,
            endBalance: 4496,
            monthData: [{ title: 'HOA', cost: 204, monthIN: 1 }],
            monthContributions: [],
        },
        {
            monthId: 2,
            monthName: 'February',
            begBalance: 4496,
            endBalance: 3920.11,
            monthData: [{ title: 'Property Taxes', cost: 1275.89, monthIN: 2 }],
            monthContributions: [],
        },
        {
            monthId: 3,
            monthName: 'March',
            begBalance: 3920.11,
            endBalance: 4620.11,
            monthData: [],
            monthContributions: [],
        },
        {
            monthId: 4,
            monthName: 'April',
            begBalance: 4620.11,
            endBalance: -216.49,
            monthData: [
                { title: 'Income Taxes', cost: 4000, monthIN: 4 },
                { title: 'Home Insurance', cost: 865.73, monthIN: 4 },
                { title: 'Auto Insurance', cost: 670.87, monthIN: 4 },
            ],
            monthContributions: [],
        },
        {
            monthId: 5,
            monthName: 'May',
            begBalance: -216.49,
            endBalance: 483.51,
            monthData: [],
            monthContributions: [],
        },
        {
            monthId: 6,
            monthName: 'June',
            begBalance: 483.51,
            endBalance: -92.38,
            monthData: [{ title: 'Property Taxes', cost: 1275.89, monthIN: 6 }],
            monthContributions: [],
        },
        {
            monthId: 7,
            monthName: 'July',
            begBalance: -92.38,
            endBalance: 298.12,
            monthData: [
                { title: 'HOA Dues', cost: 189.5, monthIN: 7 },
                { title: 'Amazon', cost: 120, monthIN: 7 },
            ],
            monthContributions: [],
        },
        {
            monthId: 8,
            monthName: 'August',
            begBalance: 298.12,
            endBalance: 327.25,
            monthData: [{ title: 'Life Insurance', cost: 670.87, monthIN: 8 }],
            monthContributions: [],
        },
        {
            monthId: 9,
            monthName: 'September',
            begBalance: 327.25,
            endBalance: 1027.25,
            monthData: [],
            monthContributions: [],
        },
        {
            monthId: 10,
            monthName: 'October',
            begBalance: 1027.25,
            endBalance: 1727.25,
            monthData: [],
            monthContributions: [],
        },
        {
            monthId: 11,
            monthName: 'November',
            begBalance: 1727.25,
            endBalance: 2307.25,
            monthData: [{ title: 'Costco', cost: 120, monthIN: 11 }],
            monthContributions: [],
        },
        {
            monthId: 12,
            monthName: 'December',
            begBalance: 2307.25,
            endBalance: 2866.7,
            monthData: [{ title: 'Vehicle Registration', cost: 240.55, monthIN: 12 }],
            monthContributions: [{title: "testing", contribution: 100, monthIN: 12}],
        },
    ];

export default TestData;

// {title: "testing", contribution: 100, monthIN: 1}