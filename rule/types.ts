type Action = SatisfyAction | MatchAction;

type MCSatisfyAction = { mc: Inequality };

type SatisfyAction = MCSatisfyAction | SatisfyOneOfAction | SatisfyAllAction;

type MatchAction = string[];

type SatisfyAllActionObject = SatisfyAction | MCSatisfyAction;
type SatisfyAllAction = SatisfyAllActionObject[];

type SatisfyOneOfActionObject = SatisfyAction | MCSatisfyAction;
type SatisfyOneOfAction = SatisfyOneOfActionObject[];

type Rule = RuleId | RuleObject;

interface RuleObject {
  action: Action;
}

interface BaseConfiguration {
  title: string;
  base_rule: Rule[];
}

type Inequality = string;

type RuleId = string;

const enum InequalitySign {
  AtLeast,
  AtMost,
}

// export type {
//   SatisfyOneOf,
//   MCSatisfyRule,
//   SatisfyAll,
//   SatisfyRule,
//   SatisfyRuleObject,
// };
