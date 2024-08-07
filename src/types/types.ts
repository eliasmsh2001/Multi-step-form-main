export class StepType {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
  constructor(
    stepId: number,
    stepTitle: string,
    stepDesc: string,
    activeStep: boolean
  ) {
    this.id = stepId;
    this.title = stepTitle;
    this.description = stepDesc;
    this.isActive = activeStep;
  }
}

export class Plan {
  icon: string;
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  selected: boolean;
  constructor(
    planIcon: string,
    planTitle: string,
    planMPrice: number,
    planYPrice: number,
    planSelected: boolean
  ) {
    this.icon = planIcon;
    this.title = planTitle;
    this.monthlyPrice = planMPrice;
    this.yearlyPrice = planYPrice;
    this.selected = planSelected;
  }
}
export class AddOn {
  title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  selected: boolean;
  constructor(
    addOnDescription: string,
    addOnTitle: string,
    addOnMPrice: number,
    addOnYPrice: number,
    addOnSelected: boolean
  ) {
    this.description = addOnDescription;
    this.title = addOnTitle;
    this.monthlyPrice = addOnMPrice;
    this.yearlyPrice = addOnYPrice;
    this.selected = addOnSelected;
  }
}

export class PlanStateItem {
  planTitle: string;
  planMonthlyPrice: number;
  planYearlyPrice: number;
  constructor(
    planStateTitle: string,
    planStateMprice: number,
    planStateYprice: number
  ) {
    this.planTitle = planStateTitle;
    this.planMonthlyPrice = planStateMprice;
    this.planYearlyPrice = planStateYprice;
  }
}

export class PlanState {
  plans: { item: PlanStateItem; selected: string; option: string };
  constructor(state: {
    item: PlanStateItem;
    selected: string;
    option: string;
  }) {
    this.plans = state;
  }
}

export class AddOnStateItem {
  addOnTitle: string;
  addOnMonthlyPrice: number;
  addOnYearlyPrice: number;
  constructor(
    addOnStateTitle: string,
    addOnStateMprice: number,
    addOnStateYprice: number
  ) {
    this.addOnTitle = addOnStateTitle;
    this.addOnMonthlyPrice = addOnStateMprice;
    this.addOnYearlyPrice = addOnStateYprice;
  }
}

export class AddOnState {
  addOns: { item: AddOnStateItem[] };
  constructor(addOnItem: { item: AddOnStateItem[] }) {
    this.addOns = addOnItem;
  }
}
