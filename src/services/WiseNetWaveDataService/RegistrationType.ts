type Fullname = {
  firstname: string;
  lastname: string;
};

export type Visitor = Fullname & {};
export type WhoToVisit = Fullname & {};

export type RegistrationType = {
  visitor: Visitor;
  whoToVisit: WhoToVisit;
};
