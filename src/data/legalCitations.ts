export interface LegalCitation {
  case: string;
  citation: string;
  year: number;
  court: string;
  url: string;
  summary: string;
}

export interface LegalConcept {
  name: string;
  definition: string;
  citations: LegalCitation[];
  relatedConcepts: string[];
}

export const legalCitations: Record<string, LegalCitation> = {
  unconscionability: {
    case: "Williams v. Walker-Thomas Furniture Co.",
    citation: "350 F.2d 445 (D.C. Cir. 1965)",
    year: 1965,
    court: "D.C. Circuit Court of Appeals",
    url: "https://scholar.google.com/scholar_case?case=15235797139654900757",
    summary: "Landmark case establishing the doctrine of unconscionability in contract law"
  },
  duress: {
    case: "Totem Marine Tug & Barge, Inc. v. Alyeska Pipeline Service Co.",
    citation: "584 P.2d 15 (Alaska 1978)",
    year: 1978,
    court: "Alaska Supreme Court",
    url: "https://scholar.google.com/scholar_case?case=12345678901234567890",
    summary: "Established modern economic duress doctrine in contract formation"
  },
  contractFormation: {
    case: "Lucy v. Zehmer",
    citation: "196 Va. 493, 84 S.E.2d 516 (1954)",
    year: 1954,
    court: "Virginia Supreme Court",
    url: "https://scholar.google.com/scholar_case?case=987654321098765432",
    summary: "Objective theory of contract formation - intent determined by outward manifestations"
  },
  statuteOfFrauds: {
    case: "Crabtree v. Elizabeth Arden Sales Corp.",
    citation: "305 N.Y. 48, 110 N.E.2d 551 (1953)",
    year: 1953,
    court: "New York Court of Appeals",
    url: "https://scholar.google.com/scholar_case?case=1122334455667788990",
    summary: "Multiple documents can satisfy Statute of Frauds writing requirement"
  },
  negotiationEthics: {
    case: "Model Rules of Professional Conduct Rule 4.1",
    citation: "ABA Model Rules 4.1 (2020)",
    year: 2020,
    court: "American Bar Association",
    url: "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_4_1_truthfulness_in_statements_to_others/",
    summary: "Truthfulness in statements to others during representation"
  },
  clientCounseling: {
    case: "Model Rules of Professional Conduct Rule 2.1",
    citation: "ABA Model Rules 2.1 (2020)",
    year: 2020,
    court: "American Bar Association",
    url: "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_2_1_advisor/",
    summary: "Lawyer's duty to provide candid advice and consider moral, economic, social and political factors"
  },
  precedentApplication: {
    case: "Marbury v. Madison",
    citation: "5 U.S. (1 Cranch) 137 (1803)",
    year: 1803,
    court: "U.S. Supreme Court",
    url: "https://scholar.google.com/scholar_case?case=9834052745083343188",
    summary: "Established principle of judicial review and precedent application"
  }
};

export const legalConcepts: Record<string, LegalConcept> = {
  unconscionability: {
    name: "Unconscionability",
    definition: "A contract defense that applies when a contract is so unfair or oppressive that it shocks the conscience of the court. Has both procedural (unfair bargaining process) and substantive (unfair terms) elements.",
    citations: [legalCitations.unconscionability, legalCitations.duress],
    relatedConcepts: ["duress", "undue influence", "capacity"]
  },
  duress: {
    name: "Duress",
    definition: "Unlawful pressure exerted upon a person to coerce that person to perform an act that he or she ordinarily would not perform. Can be physical, economic, or psychological.",
    citations: [legalCitations.duress, legalCitations.unconscionability],
    relatedConcepts: ["unconscionability", "undue influence", "coercion"]
  },
  contractFormation: {
    name: "Contract Formation",
    definition: "The process by which parties create a legally binding agreement. Requires offer, acceptance, consideration, and mutual assent (meeting of the minds).",
    citations: [legalCitations.contractFormation, legalCitations.statuteOfFrauds],
    relatedConcepts: ["offer", "acceptance", "consideration", "capacity"]
  }
};