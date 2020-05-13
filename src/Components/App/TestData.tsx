
interface TestDataProps {
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
            begBalance: 1000,
            endBalance: 100,
            monthData: [
                {title: "HOA", cost: 204},
            ]
        },
        {
            monthId: 2,
            monthName: 'February',
            begBalance: 100,
            endBalance: 100,
            monthData: [
                {title: "Property Taxes", cost: 1275.89},
            ]
        },
        {
            monthId: 3,
            monthName: 'March',
            begBalance: 100,
            endBalance: -100,
            monthData: [
            ]
        },
        {
            monthId: 4,
            monthName: 'April',
            begBalance: 1000,
            endBalance: 100,
            monthData: [
                {title: "Income Taxes", cost: 4000},
                {title: "Home Insurance", cost: 865.73},
                {title: "Auto Insurance", cost: 670.87},
            ]
        },
        {
            monthId: 5,
            monthName: 'May',
            begBalance: 1000,
            endBalance: 100,
            monthData: [
            ]
        },
        {
            monthId: 6,
            monthName: 'June',
            begBalance: 1000,
            endBalance: 100,
            monthData: [
                {title: "Property Taxes", cost: 1275.89},
            ]
        },
        {
            monthId: 7,
            monthName: 'July',
            begBalance: 1000,
            endBalance: 100,
            monthData: [
                {title: "HOA Dues", cost: 189.50},
                {title: "Amazon", cost: 120},
            ]
        },
        {
            monthId: 8,
            monthName: 'August',
            begBalance: 1000,
            endBalance: 100,
            monthData: [
                {title: "Life Insurance", cost: 670.87},
            ]
        },
        {
            monthId: 9,
            monthName: 'September',
            begBalance: 1000,
            endBalance: 100,
            monthData: [
            ]
        },
        {
            monthId: 10,
            monthName: 'October',
            begBalance: 1000,
            endBalance: 100,
            monthData: [
            ]
        },
        {
            monthId: 11,
            monthName: 'November',
            begBalance: 1000,
            endBalance: 100,
            monthData: [
                {title: "Costco", cost: 120},
            ]
        },
        {
            monthId: 12,
            monthName: 'December',
            begBalance: 1000,
            endBalance: 100,
            monthData: [
                {title: "Vehicle Registration", cost: 240.55},
            ]
        },
    ];

export default TestData;

