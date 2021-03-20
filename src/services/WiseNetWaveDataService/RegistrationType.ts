type Fullname = {
  firstname: string;
  lastname: string;
};

export type Visitor = Fullname & {};

export type RegistrationType = {
  visitor: Visitor;
  whoToVisit: string;
};
