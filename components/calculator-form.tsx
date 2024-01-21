"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "./input";
import { CalculateInvestmentParams } from "~/lib/calculate-investment";

interface CalculatorFormProps {
  onSubmitCallback: (data: CalculateInvestmentParams) => void;
}

export default function CalculatorForm({
  onSubmitCallback,
}: CalculatorFormProps) {
  const { register, handleSubmit, watch } = useForm<CalculateInvestmentParams>({
    defaultValues: {
      initialMoney: "1000",
      annualRate: "15",
      time: "1",
      timeType: "years",
    },
  });

  const onSubmit = (data: CalculateInvestmentParams) => onSubmitCallback(data);

  useEffect(() => {
    handleSubmit(onSubmit)();
  }, []);

  useEffect(() => {
    const subscription = watch(() => handleSubmit(onSubmit)());
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return (
    <form className="grid gap-4">
      <Input
        id="initialMoney"
        name="initialMoney"
        label="Cajita inicial ($ MXN)"
        placeholder="$1000"
        min={0}
        step={100}
        register={register}
      />
      <Input
        id="annualRate"
        name="annualRate"
        label="Tasa de rendimiento anual (%)"
        placeholder="%15"
        min={0}
        step={1}
        register={register}
      />
      <div className="grid grid-cols-3 gap-2">
        <Input
          id="time"
          name="time"
          label="Cantidad de tiempo"
          placeholder="1"
          min={0}
          step={1}
          register={register}
          className="col-span-2"
        />
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Unidad
          </label>
          <select
            id="timeType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            {...register("timeType")}
          >
            <option value="years">Años</option>
            <option value="months">Meses</option>
            <option value="days">Días</option>
          </select>
        </div>
      </div>
    </form>
  );
}
