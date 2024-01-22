"use client";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  CalculateInvestmentParams,
  TimeType,
} from "~/lib/calculate-investment";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface CalculatorFormProps {
  onSubmitCallback: (data: CalculateInvestmentParams) => void;
}

export default function CalculatorForm({
  onSubmitCallback,
}: CalculatorFormProps) {
  const { register, handleSubmit, watch, control, setValue } =
    useForm<CalculateInvestmentParams>({
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
    const subscription = watch(
      ({ initialMoney, annualRate, time, timeType }) =>
        initialMoney &&
        annualRate &&
        time &&
        timeType &&
        handleSubmit(onSubmit)()
    );
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return (
    <form className="grid gap-4">
      <div>
        <Label htmlFor="initialMoney" className="inline-block mb-3">
          Cajita inicial ($ MXN)
        </Label>
        <Input
          id="initialMoney"
          placeholder="$ 1000"
          min={0}
          step={500}
          className="text-lg"
          type="number"
          {...register("initialMoney")}
        />
      </div>
      <div>
        <Label htmlFor="annualRate" className="inline-block mb-3">
          Tasa de rendimiento anual (%)
        </Label>
        <Input
          id="annualRate"
          placeholder="% 15"
          min={0}
          step={1}
          className="text-lg"
          type="number"
          {...register("annualRate")}
        />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <Label htmlFor="time" className="inline-block mb-3">
            Cantidad de tiempo
          </Label>
          <Input
            id="time"
            placeholder="1"
            min={0}
            step={1}
            className="text-lg"
            {...register("time")}
          />
        </div>
        <div>
          <Label htmlFor="time" className="inline-block mb-3">
            Unidad
          </Label>
          <Select
            defaultValue="years"
            onValueChange={(v: TimeType) => setValue("timeType", v)}
          >
            <SelectTrigger>
              <SelectValue placeholder="" defaultValue="years" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="years">Años</SelectItem>
              <SelectItem value="months">Meses</SelectItem>
              <SelectItem value="days">Días</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </form>
  );
}
