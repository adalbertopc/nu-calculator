export type TimeType = "years" | "months" | "days";

export interface InvestmentResult {
  finalAmount: string;
  dailyEarnings: string;
  earnings: string;
  averageMonthlyEarnings?: string;
}

export interface CalculateInvestmentParams {
  initialMoney: string;
  annualRate: string;
  time: string;
  timeType: TimeType;
}

export function calculateInvestment({
  initialMoney,
  annualRate,
  time,
  timeType,
}: CalculateInvestmentParams): InvestmentResult {
  const initialMoneyNum = parseFloat(initialMoney);
  const annualRateNum = parseFloat(annualRate);
  const timeNum = parseFloat(time);

  let totalDays: number;

  switch (timeType) {
    case "years":
      totalDays = timeNum * 365;
      break;
    case "months":
      totalDays = timeNum * 30;
      break;
    case "days":
      totalDays = timeNum;
      break;
    default:
      throw new Error("Invalid timeType");
  }

  let currentAmount = initialMoneyNum;

  for (let i = 1; i <= totalDays; i++) {
    const dailyEarnings = (currentAmount * (annualRateNum / 100)) / 365;
    currentAmount += dailyEarnings;
  }

  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  const dailyRate = (1 + annualRateNum / 100) ** (1 / 365) - 1;

  let result: InvestmentResult = {
    finalAmount: formatter.format(currentAmount),
    earnings: formatter.format(currentAmount - initialMoneyNum),
    dailyEarnings: formatter.format(currentAmount * dailyRate),
  };

  if (totalDays >= 30) {
    const averageMonthlyEarnings =
      (currentAmount - initialMoneyNum) / (totalDays / 30);
    result = {
      ...result,
      averageMonthlyEarnings: formatter.format(averageMonthlyEarnings),
    };
  }

  return result;
}
