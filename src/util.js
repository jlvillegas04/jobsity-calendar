import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
    const year = dayjs().year();
    const firstDayMonth = dayjs(new Date(year, month, 1)).day();
    let curMonthCount = 0 - firstDayMonth;

    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            curMonthCount++;
            return dayjs(new Date(year, month, curMonthCount))
        });
    });
    return daysMatrix;
}