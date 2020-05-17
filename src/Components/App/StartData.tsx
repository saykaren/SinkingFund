

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
    monthContributions?: [{title: string, contribution: number, monthIN: number}]
}
export const StartData =
    [
        {
            monthId: 1,
            monthName: 'January',
            begBalance: 1000,
            endBalance: 1000,
            monthData: [{ title: 'EXAMPLE', cost: 1, monthIN: 1 }],
            monthContributions: [{title: "EXAMPLE", contribution: 1, monthIN: 1 }],
        },
        {
            monthId: 2,
            monthName: 'February',
            begBalance: 1002,
            endBalance: 1000,
            monthData: [],
            monthContributions: [],
        },
        {
            monthId: 3,
            monthName: 'March',
            begBalance: 1000,
            endBalance: 1000,
            monthData: [],
            monthContributions: [],
        },
        {
            monthId: 4,
            monthName: 'April',
            begBalance: 1000,
            endBalance: 1000,
            monthData: [],
            monthContributions: [],
        },
        {
            monthId: 5,
            monthName: 'May',
            begBalance: 1000,
            endBalance: 1000,
            monthData: [],
            monthContributions: [],
        },
        {
            monthId: 6,
            monthName: 'June',
            begBalance: 1000,
            endBalance: 1000,
            monthData: [],
            monthContributions: [],
        },
        {
            monthId: 7,
            monthName: 'July',
            begBalance: 1000,
            endBalance: 1000,
            monthData: [],
            monthContributions: [],
        },
        {
            monthId: 8,
            monthName: 'August',
            begBalance: 1000,
            endBalance: 1000,
            monthData: [],
            monthContributions: [],
        },
        {
            monthId: 9,
            monthName: 'September',
            begBalance: 1000,
            endBalance: 1000,
            monthData: [],
            monthContributions: [],
        },
        {
            monthId: 10,
            monthName: 'October',
            begBalance: 1000,
            endBalance: 1000,
            monthData: [],
            monthContributions: [],
        },
        {
            monthId: 11,
            monthName: 'November',
            begBalance: 1000,
            endBalance: 1000,
            monthData: [],
            monthContributions: [],
        },
        {
            monthId: 12,
            monthName: 'December',
            begBalance: 1000,
            endBalance: 1000,
            monthData: [],
            monthContributions: [],
        },
    ];


export default StartData;

