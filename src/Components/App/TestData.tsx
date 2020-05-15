
export interface TestDataProps {
    monthId: number,
    monthName: string,
    begBalance: number,
    endBalance: number,
    monthData: [{
        title: string,
        cost: number,
    }],
}
const TestData =
    [
        {
            monthId: 1,
            monthName: 'January',
            begBalance: 4000,
            endBalance: 4496,
            monthData: [{ title: 'HOA', cost: 204, monthIN: 1 }],
        },
        {
            monthId: 2,
            monthName: 'February',
            begBalance: 4496,
            endBalance: 3920.11,
            monthData: [{ title: 'Property Taxes', cost: 1275.89, monthIN: 2 }],
        },
        {
            monthId: 3,
            monthName: 'March',
            begBalance: 3920.11,
            endBalance: 4620.11,
            monthData: [],
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
        },
        {
            monthId: 5,
            monthName: 'May',
            begBalance: -216.49,
            endBalance: 483.51,
            monthData: [],
        },
        {
            monthId: 6,
            monthName: 'June',
            begBalance: 483.51,
            endBalance: -92.38,
            monthData: [{ title: 'Property Taxes', cost: 1275.89, monthIN: 6 }],
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
        },
        {
            monthId: 8,
            monthName: 'August',
            begBalance: 298.12,
            endBalance: 327.25,
            monthData: [{ title: 'Life Insurance', cost: 670.87, monthIN: 8 }],
        },
        {
            monthId: 9,
            monthName: 'September',
            begBalance: 327.25,
            endBalance: 1027.25,
            monthData: [],
        },
        {
            monthId: 10,
            monthName: 'October',
            begBalance: 1027.25,
            endBalance: 1727.25,
            monthData: [],
        },
        {
            monthId: 11,
            monthName: 'November',
            begBalance: 1727.25,
            endBalance: 2307.25,
            monthData: [{ title: 'Costco', cost: 120, monthIN: 11 }],
        },
        {
            monthId: 12,
            monthName: 'December',
            begBalance: 2307.25,
            endBalance: 2766.70,
            monthData: [{ title: 'Vehicle Registration', cost: 240.55, monthIN: 12 }],
        },
    ];

export default TestData;

