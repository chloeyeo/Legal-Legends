import { QuestScenario, LegalAuthority, RelatedConcept, JurisdictionalVariation } from '../types/game';

export const questScenarios: Record<string, QuestScenario[]> = {
  courtroom: [
    {
      id: 'contract-unconscionability',
      title: 'The Cursed Contract Challenge',
      description: 'Navigate the treacherous waters of unconscionable contracts in the shadow realm of corporate law.',
      introduction: 'A desperate client approaches you with a contract that seems to bind their very soul...',
      minCorrectAnswers: 3,
      successOutcome: 'Your mastery of contract law has freed your client from the cursed agreement! The Shadow Judge nods approvingly as justice prevails in the dark courts.',
      failureOutcome: 'The dark forces of unfair contracts have proven too cunning. Your client remains bound, but you have gained valuable knowledge for future battles.',
      questions: [
        {
          id: 'unconscionability-definition',
          title: 'Understanding Unconscionability',
          scenario: 'Your client, a struggling single mother, signed a furniture purchase agreement with Walker-Thomas Furniture. The contract allows the store to repossess ALL items ever purchased if she defaults on any single item, even years later. She has paid $1,400 on a $1,600 balance but faces losing everything over a $164 stereo.',
          question: 'What is the primary legal doctrine that could help your client challenge this contract?',
          skillFocus: 'research',
          backgroundContext: 'This scenario is based on the landmark case Williams v. Walker-Thomas Furniture Co., which established modern unconscionability doctrine in American contract law.',
          practicalImportance: 'Unconscionability is one of the most important consumer protection doctrines, regularly applied in cases involving predatory lending, employment contracts, and consumer agreements.',
          choices: [
            {
              id: 'unconscionability',
              text: 'Unconscionability - The contract terms are so unfair and oppressive that they shock the conscience of the court',
              isCorrect: true,
              explanation: 'Correct! Unconscionability is the primary doctrine here. This case mirrors Williams v. Walker-Thomas Furniture Co., the landmark unconscionability case.',
              detailedExplanation: 'Unconscionability has two elements: procedural (unfair bargaining process) and substantive (unfair terms). The cross-collateral clause allowing repossession of all items for default on one is substantively unconscionable, and the disparity in bargaining power suggests procedural unconscionability.',
              primaryAuthority: {
                type: 'case',
                citation: 'Williams v. Walker-Thomas Furniture Co.',
                bluebookCitation: 'Williams v. Walker-Thomas Furniture Co., 350 F.2d 445 (D.C. Cir. 1965)',
                url: 'https://www.law.cornell.edu/wex/unconscionability',
                summary: 'Landmark case establishing the doctrine of unconscionability in contract law, requiring both procedural and substantive unfairness.',
                jurisdiction: 'D.C. Circuit',
                year: 1965
              },
              relatedAuthorities: [
                {
                  type: 'statute',
                  citation: 'UCC § 2-302',
                  bluebookCitation: 'U.C.C. § 2-302 (2020)',
                  url: 'https://www.law.cornell.edu/ucc/2/2-302',
                  summary: 'Uniform Commercial Code provision allowing courts to refuse enforcement of unconscionable contracts or clauses.',
                  jurisdiction: 'Uniform Law',
                  year: 2020
                }
              ],
              opposingArgument: 'The opposing counsel would argue that the contract terms were clearly disclosed, the client voluntarily agreed to them, and cross-collateral clauses are standard industry practice that protects merchants from default risk.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'California',
                  rule: 'Requires both procedural and substantive unconscionability, with sliding scale approach',
                  citation: 'Armendariz v. Foundation Health Psychcare Services, Inc., 24 Cal.4th 83 (2000)',
                  difference: 'More procedural unconscionability can offset less substantive unconscionability and vice versa'
                },
                {
                  jurisdiction: 'New York',
                  rule: 'Focuses heavily on substantive unconscionability, less emphasis on procedural',
                  citation: 'Gillman v. Chase Manhattan Bank, N.A., 73 N.Y.2d 1 (1988)',
                  difference: 'Courts more willing to find unconscionability based on terms alone'
                }
              ],
              policyConsiderations: 'Unconscionability doctrine balances freedom of contract with protection of vulnerable parties. It prevents exploitation while preserving commercial certainty and the ability to make binding agreements.',
              practiceAreaApplications: ['Consumer Protection', 'Employment Law', 'Commercial Litigation', 'Banking Law', 'Insurance Defense'],
              relatedConcepts: [
                {
                  name: 'Duress',
                  description: 'Unlawful pressure that coerces agreement',
                  relationship: 'Related defense that focuses on improper conduct rather than unfair terms'
                },
                {
                  name: 'Undue Influence',
                  description: 'Abuse of position of trust or authority',
                  relationship: 'Another contract defense for situations involving relationship-based pressure'
                }
              ],
              xpGain: 75,
              skillBonus: 'research',
              consequence: 'success'
            },
            {
              id: 'duress',
              text: 'Economic duress - The client was forced to sign due to financial pressure',
              isCorrect: false,
              explanation: 'While economic pressure existed, duress requires wrongful threats. The store\'s standard contract terms, though unfair, don\'t constitute duress.',
              detailedExplanation: 'Economic duress requires: (1) wrongful conduct by defendant, (2) plaintiff had no reasonable alternative, and (3) defendant\'s conduct caused plaintiff\'s assent. Standard contract terms, even if harsh, typically don\'t meet the "wrongful conduct" requirement.',
              primaryAuthority: {
                type: 'case',
                citation: 'Totem Marine Tug & Barge, Inc. v. Alyeska Pipeline Service Co.',
                bluebookCitation: 'Totem Marine Tug & Barge, Inc. v. Alyeska Pipeline Service Co., 584 P.2d 15 (Alaska 1978)',
                url: 'https://www.law.cornell.edu/wex/duress',
                summary: 'Established modern economic duress doctrine requiring wrongful conduct, not just economic pressure.',
                jurisdiction: 'Alaska Supreme Court',
                year: 1978
              },
              opposingArgument: 'One could argue that the furniture store deliberately targeted vulnerable consumers and used high-pressure sales tactics, creating a form of economic duress through exploitation of desperate circumstances.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'Alaska',
                  rule: 'Requires wrongful conduct, lack of reasonable alternative, and causation',
                  difference: 'Strict requirements for proving economic duress'
                },
                {
                  jurisdiction: 'California',
                  rule: 'More liberal approach, considers totality of circumstances',
                  difference: 'May find duress in broader range of economic pressure situations'
                }
              ],
              policyConsiderations: 'Economic duress doctrine must balance protecting parties from coercion while not undermining the enforceability of contracts made under normal commercial pressure.',
              practiceAreaApplications: ['Contract Disputes', 'Business Litigation', 'Employment Law', 'Real Estate'],
              xpGain: 25,
              consequence: 'failure'
            },
            {
              id: 'fraud',
              text: 'Fraud in the inducement - The store misrepresented the contract terms',
              isCorrect: false,
              explanation: 'No evidence suggests the store made false representations. The terms were in the contract, though perhaps not clearly explained.',
              detailedExplanation: 'Fraud requires: (1) false representation of material fact, (2) knowledge of falsity, (3) intent to deceive, (4) justifiable reliance, and (5) damages. Without evidence of misrepresentation, fraud is not applicable here.',
              primaryAuthority: {
                type: 'case',
                citation: 'Restatement (Second) of Contracts § 164',
                bluebookCitation: 'Restatement (Second) of Contracts § 164 (1981)',
                url: 'https://www.law.cornell.edu/wex/fraud',
                summary: 'Defines elements of fraud in contract formation, requiring false representation of material fact.',
                jurisdiction: 'American Law Institute',
                year: 1981
              },
              opposingArgument: 'A creative argument might claim that burying the cross-collateral clause in fine print constitutes fraudulent concealment, especially if sales staff failed to explain its significance.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'Texas',
                  rule: 'Requires clear and convincing evidence of all fraud elements',
                  difference: 'Higher burden of proof than most contract defenses'
                },
                {
                  jurisdiction: 'Florida',
                  rule: 'Allows fraud claims for omission of material facts in some circumstances',
                  difference: 'Broader recognition of fraudulent concealment theories'
                }
              ],
              policyConsiderations: 'Fraud doctrine protects against deliberate deception while requiring clear proof to avoid undermining contract certainty.',
              practiceAreaApplications: ['Securities Litigation', 'Real Estate', 'Insurance Claims', 'Business Disputes'],
              xpGain: 20,
              consequence: 'failure'
            },
            {
              id: 'statute-of-frauds',
              text: 'Statute of Frauds violation - The contract should have been in writing',
              isCorrect: false,
              explanation: 'The contract WAS in writing. The Statute of Frauds requires certain contracts to be written, but this doesn\'t help when the written terms are the problem.',
              detailedExplanation: 'The Statute of Frauds requires contracts for the sale of goods over $500 to be in writing. Here, the contract is written - the issue is the unfairness of its terms, not the lack of a writing.',
              primaryAuthority: {
                type: 'statute',
                citation: 'UCC § 2-201',
                bluebookCitation: 'U.C.C. § 2-201 (2020)',
                url: 'https://www.law.cornell.edu/ucc/2/2-201',
                summary: 'Statute of Frauds provision requiring written contracts for sale of goods over $500.',
                jurisdiction: 'Uniform Law',
                year: 2020
              },
              opposingArgument: 'No reasonable opposing argument exists here, as the Statute of Frauds is clearly inapplicable to a written contract challenge.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'All U.S. States',
                  rule: 'UCC § 2-201 adopted with minor variations',
                  difference: 'Some states have different dollar thresholds or exceptions'
                }
              ],
              policyConsiderations: 'The Statute of Frauds prevents fraud and perjury by requiring written evidence of important agreements, but doesn\'t address contract fairness.',
              practiceAreaApplications: ['Commercial Sales', 'Real Estate', 'Employment Contracts'],
              xpGain: 15,
              consequence: 'failure'
            },
            {
              id: 'lack-of-consideration',
              text: 'Lack of consideration - The exchange was not fair or adequate',
              isCorrect: false,
              explanation: 'Consideration exists (furniture for money). Courts generally don\'t examine adequacy of consideration, only whether it exists.',
              detailedExplanation: 'Consideration requires a bargained-for exchange of legal value. The furniture (legal value) was exchanged for money (legal value) in a bargained-for transaction. Inadequate consideration is different from unconscionability and rarely invalidates contracts.',
              primaryAuthority: {
                type: 'case',
                citation: 'Hamer v. Sidway',
                bluebookCitation: 'Hamer v. Sidway, 124 N.Y. 538 (1891)',
                url: 'https://www.law.cornell.edu/wex/consideration',
                summary: 'Classic case establishing that courts don\'t examine adequacy of consideration, only its existence.',
                jurisdiction: 'New York Court of Appeals',
                year: 1891
              },
              opposingArgument: 'One might argue that grossly inadequate consideration can be evidence of unconscionability or fraud, though this is a weak argument in most jurisdictions.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'Most U.S. States',
                  rule: 'Courts do not examine adequacy of consideration',
                  difference: 'Uniform approach across jurisdictions'
                },
                {
                  jurisdiction: 'Some Equity Courts',
                  rule: 'May consider gross inadequacy as evidence of other problems',
                  difference: 'Limited circumstances where adequacy matters'
                }
              ],
              policyConsiderations: 'The adequacy rule promotes freedom of contract and judicial efficiency by avoiding courts becoming price regulators.',
              practiceAreaApplications: ['Contract Formation', 'Commercial Law', 'Real Estate'],
              xpGain: 20,
              consequence: 'failure'
            }
          ]
        },
        {
          id: 'procedural-vs-substantive',
          title: 'Elements of Unconscionability',
          scenario: 'You\'re analyzing the Walker-Thomas contract. The client had a 7th-grade education, no legal counsel, and the contract was presented as "standard terms" with no opportunity to negotiate. The cross-collateral clause was buried in fine print.',
          question: 'Which type of unconscionability is MOST clearly demonstrated by these facts?',
          skillFocus: 'advocacy',
          backgroundContext: 'Understanding the distinction between procedural and substantive unconscionability is crucial for building effective arguments and understanding how courts analyze unfair contracts.',
          practicalImportance: 'Most courts require both procedural and substantive unconscionability, but they can exist in varying degrees. Identifying which is stronger helps focus your legal argument.',
          choices: [
            {
              id: 'procedural',
              text: 'Procedural unconscionability - The bargaining process was fundamentally unfair due to disparity in bargaining power and lack of meaningful choice',
              isCorrect: true,
              explanation: 'Correct! The education disparity, lack of counsel, no negotiation opportunity, and hidden terms all demonstrate procedural unconscionability.',
              detailedExplanation: 'Procedural unconscionability focuses on the bargaining process. Key factors include: disparity in bargaining power, lack of meaningful choice, hidden terms, high-pressure tactics, and lack of understanding. The 7th-grade education vs. sophisticated merchant, non-negotiable "standard" terms, and buried clauses all support procedural unconscionability.',
              primaryAuthority: {
                type: 'case',
                citation: 'Williams v. Walker-Thomas Furniture Co.',
                bluebookCitation: 'Williams v. Walker-Thomas Furniture Co., 350 F.2d 445 (D.C. Cir. 1965)',
                url: 'https://www.law.cornell.edu/wex/unconscionability',
                summary: 'Established the procedural/substantive unconscionability framework still used today.',
                jurisdiction: 'D.C. Circuit',
                year: 1965
              },
              relatedAuthorities: [
                {
                  type: 'case',
                  citation: 'Armendariz v. Foundation Health Psychcare Services',
                  bluebookCitation: 'Armendariz v. Foundation Health Psychcare Services, Inc., 24 Cal.4th 83 (2000)',
                  url: 'https://www.law.cornell.edu/wex/unconscionability',
                  summary: 'California case explaining the sliding scale approach to procedural and substantive unconscionability.',
                  jurisdiction: 'California Supreme Court',
                  year: 2000
                }
              ],
              opposingArgument: 'Defense counsel would argue that the client voluntarily entered the store, chose to purchase furniture, and signed the contract after having opportunity to read it. They would claim standard form contracts are necessary for business efficiency.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'California',
                  rule: 'Uses sliding scale - more procedural unconscionability can offset less substantive',
                  difference: 'Flexible approach allowing various combinations of procedural/substantive elements'
                },
                {
                  jurisdiction: 'New York',
                  rule: 'Requires both procedural and substantive, but focuses more on substantive',
                  difference: 'Less willing to find unconscionability based primarily on procedural factors'
                }
              ],
              policyConsiderations: 'Procedural unconscionability doctrine protects vulnerable parties while preserving the efficiency of standard form contracts in commercial transactions.',
              practiceAreaApplications: ['Consumer Protection', 'Employment Arbitration', 'Insurance Contracts', 'Adhesion Contracts'],
              relatedConcepts: [
                {
                  name: 'Adhesion Contracts',
                  description: 'Standardized contracts offered on take-it-or-leave-it basis',
                  relationship: 'Often exhibit procedural unconscionability due to lack of bargaining power'
                },
                {
                  name: 'Contracts of Adhesion',
                  description: 'Contracts where one party has significantly superior bargaining power',
                  relationship: 'Classic example of procedural unconscionability factors'
                }
              ],
              xpGain: 80,
              skillBonus: 'advocacy',
              consequence: 'success'
            },
            {
              id: 'substantive',
              text: 'Substantive unconscionability - The contract terms themselves are so one-sided they shock the conscience',
              isCorrect: false,
              explanation: 'While the cross-collateral clause is substantively unconscionable, the facts described primarily show procedural problems with the bargaining process.',
              detailedExplanation: 'Substantive unconscionability examines the fairness of the contract terms themselves. The cross-collateral clause is indeed substantively unconscionable, but the question asks what is MOST clearly demonstrated by the specific facts about education, counsel, and negotiation opportunity - these show procedural issues.',
              primaryAuthority: {
                type: 'case',
                citation: 'A&M Produce Co. v. FMC Corp.',
                bluebookCitation: 'A&M Produce Co. v. FMC Corp., 135 Cal.App.3d 473 (1982)',
                url: 'https://www.law.cornell.edu/wex/unconscionability',
                summary: 'California case focusing on substantive unconscionability in commercial contract terms.',
                jurisdiction: 'California Court of Appeal',
                year: 1982
              },
              opposingArgument: 'One could argue that the cross-collateral clause is so fundamentally unfair that it overshadows any procedural issues, making substantive unconscionability the primary concern.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'Texas',
                  rule: 'Emphasizes substantive unconscionability, requires terms that shock the conscience',
                  difference: 'Higher bar for finding unconscionability based on terms alone'
                }
              ],
              policyConsiderations: 'Substantive unconscionability prevents enforcement of terms that violate basic notions of fairness while respecting freedom of contract.',
              practiceAreaApplications: ['Commercial Litigation', 'Consumer Protection', 'Contract Drafting'],
              xpGain: 40,
              consequence: 'neutral'
            },
            {
              id: 'both-equally',
              text: 'Both procedural and substantive unconscionability are equally demonstrated',
              isCorrect: false,
              explanation: 'While both may be present, the specific facts in the question primarily demonstrate procedural unconscionability.',
              detailedExplanation: 'Most courts require both procedural and substantive unconscionability, but they can exist in varying degrees. The facts presented (education, counsel, negotiation) are classic procedural unconscionability factors, making it the more clearly demonstrated element here.',
              primaryAuthority: {
                type: 'case',
                citation: 'Armendariz v. Foundation Health Psychcare Services',
                bluebookCitation: 'Armendariz v. Foundation Health Psychcare Services, Inc., 24 Cal.4th 83 (2000)',
                url: 'https://www.law.cornell.edu/wex/unconscionability',
                summary: 'Explains that procedural and substantive unconscionability can exist in varying degrees on a sliding scale.',
                jurisdiction: 'California Supreme Court',
                year: 2000
              },
              opposingArgument: 'A sophisticated argument would claim that the facts show both elements equally - procedural unfairness in the bargaining process and substantive unfairness in the cross-collateral clause.',
              policyConsiderations: 'The sliding scale approach allows courts flexibility in addressing various forms of contractual unfairness.',
              practiceAreaApplications: ['Contract Analysis', 'Legal Writing', 'Appellate Practice'],
              xpGain: 35,
              consequence: 'neutral'
            },
            {
              id: 'neither',
              text: 'Neither type is clearly demonstrated - this appears to be a standard commercial transaction',
              isCorrect: false,
              explanation: 'This is incorrect. The facts clearly show unfair bargaining conditions that courts have recognized as unconscionable.',
              detailedExplanation: 'The disparity in education and sophistication, lack of legal representation, non-negotiable terms, and hidden clauses are textbook examples of procedural unconscionability. Courts have consistently found such circumstances problematic.',
              primaryAuthority: {
                type: 'case',
                citation: 'Williams v. Walker-Thomas Furniture Co.',
                bluebookCitation: 'Williams v. Walker-Thomas Furniture Co., 350 F.2d 445 (D.C. Cir. 1965)',
                url: 'https://www.law.cornell.edu/wex/unconscionability',
                summary: 'The foundational case that established these exact factors as evidence of unconscionability.',
                jurisdiction: 'D.C. Circuit',
                year: 1965
              },
              opposingArgument: 'No reasonable opposing argument exists, as these facts clearly demonstrate unconscionability factors recognized by courts.',
              policyConsiderations: 'Ignoring clear unconscionability factors would undermine consumer protection and enable exploitation of vulnerable parties.',
              practiceAreaApplications: ['Consumer Protection', 'Contract Law'],
              xpGain: 10,
              consequence: 'failure'
            },
            {
              id: 'contractual-capacity',
              text: 'This is a contractual capacity issue, not unconscionability',
              isCorrect: false,
              explanation: 'Contractual capacity involves mental competence or age. A 7th-grade education doesn\'t affect legal capacity to contract.',
              detailedExplanation: 'Contractual capacity requires mental competence and legal age. Educational level alone doesn\'t affect capacity unless it rises to the level of mental incapacity. The issue here is the unfair bargaining process, not the client\'s legal ability to enter contracts.',
              primaryAuthority: {
                type: 'case',
                citation: 'Restatement (Second) of Contracts § 12',
                bluebookCitation: 'Restatement (Second) of Contracts § 12 (1981)',
                url: 'https://www.law.cornell.edu/wex/capacity',
                summary: 'Defines contractual capacity as requiring mental competence and legal age, not educational level.',
                jurisdiction: 'American Law Institute',
                year: 1981
              },
              opposingArgument: 'One might argue that extremely limited education could affect understanding to a degree that impacts capacity, but this would be a very weak argument.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'All U.S. States',
                  rule: 'Capacity requires mental competence and majority age',
                  difference: 'Uniform approach - education level alone doesn\'t affect capacity'
                }
              ],
              policyConsiderations: 'Capacity doctrine protects those truly unable to understand contracts while avoiding paternalistic restrictions on competent adults.',
              practiceAreaApplications: ['Elder Law', 'Mental Health Law', 'Contract Formation'],
              xpGain: 15,
              consequence: 'failure'
            }
          ]
        },
        {
          id: 'remedy-selection',
          title: 'Choosing the Right Remedy',
          scenario: 'The court has found the Walker-Thomas contract unconscionable. Now you must advise on the appropriate remedy. The client has paid $1,400 toward a $1,600 balance and faces losing all previously purchased items worth approximately $1,800.',
          question: 'What remedy should you seek for your client?',
          skillFocus: 'advocacy',
          backgroundContext: 'Once unconscionability is established, courts have several remedial options. The choice of remedy can significantly impact your client\'s outcome and future legal precedent.',
          practicalImportance: 'Understanding available remedies for unconscionability is crucial for effective client counseling and litigation strategy. The remedy sought can determine whether you achieve a complete victory or partial relief.',
          choices: [
            {
              id: 'refuse-enforcement',
              text: 'Ask the court to refuse enforcement of the unconscionable cross-collateral clause while allowing the rest of the contract to stand',
              isCorrect: true,
              explanation: 'Correct! Courts can refuse to enforce unconscionable clauses while preserving the rest of the contract. This protects the client while maintaining the basic purchase agreement.',
              detailedExplanation: 'UCC § 2-302 and common law allow courts to: (1) refuse to enforce the entire contract, (2) refuse to enforce unconscionable clauses, or (3) limit application of unconscionable clauses. Here, severing the cross-collateral clause while maintaining the basic sale agreement serves both parties\' legitimate interests.',
              primaryAuthority: {
                type: 'statute',
                citation: 'UCC § 2-302',
                bluebookCitation: 'U.C.C. § 2-302 (2020)',
                url: 'https://www.law.cornell.edu/ucc/2/2-302',
                summary: 'Provides courts with flexible remedial options for unconscionable contracts, including severance of unconscionable clauses.',
                jurisdiction: 'Uniform Law',
                year: 2020
              },
              relatedAuthorities: [
                {
                  type: 'case',
                  citation: 'Williams v. Walker-Thomas Furniture Co.',
                  bluebookCitation: 'Williams v. Walker-Thomas Furniture Co., 350 F.2d 445 (D.C. Cir. 1965)',
                  url: 'https://www.law.cornell.edu/wex/unconscionability',
                  summary: 'Remanded for consideration of appropriate remedy, including possible severance of unconscionable terms.',
                  jurisdiction: 'D.C. Circuit',
                  year: 1965
                }
              ],
              opposingArgument: 'The store would argue that the cross-collateral clause is integral to the contract and cannot be severed without fundamentally altering the agreement, requiring either full enforcement or complete voidance.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'California',
                  rule: 'Favors severance when possible to preserve legitimate contractual relationships',
                  difference: 'Liberal approach to severing unconscionable clauses'
                },
                {
                  jurisdiction: 'New York',
                  rule: 'More restrictive on severance, may void entire contract if clause is central',
                  difference: 'Stricter requirements for determining when severance is appropriate'
                }
              ],
              policyConsiderations: 'Severance promotes judicial efficiency and preserves legitimate contractual relationships while eliminating unfair terms. It avoids the harsh result of voiding entire agreements.',
              practiceAreaApplications: ['Contract Litigation', 'Consumer Protection', 'Employment Law', 'Commercial Disputes'],
              relatedConcepts: [
                {
                  name: 'Severability Clauses',
                  description: 'Contract provisions that allow invalid terms to be removed while preserving the rest',
                  relationship: 'Related concept that facilitates the severance remedy'
                },
                {
                  name: 'Blue Pencil Doctrine',
                  description: 'Court\'s ability to modify or delete unconscionable contract terms',
                  relationship: 'Specific application of severance principle'
                }
              ],
              xpGain: 85,
              skillBonus: 'advocacy',
              consequence: 'success'
            },
            {
              id: 'void-entire-contract',
              text: 'Seek to void the entire contract and demand full refund of all payments made',
              isCorrect: false,
              explanation: 'While possible, voiding the entire contract may not serve the client\'s interests if she wants to keep the furniture she\'s nearly paid off.',
              detailedExplanation: 'Voiding the entire contract would require returning all furniture and getting all money back. However, the client may prefer to keep items she\'s substantially paid for. The unconscionable clause, not the entire agreement, is the problem.',
              primaryAuthority: {
                type: 'case',
                citation: 'Williams v. Walker-Thomas Furniture Co.',
                bluebookCitation: 'Williams v. Walker-Thomas Furniture Co., 350 F.2d 445 (D.C. Cir. 1965)',
                url: 'https://www.law.cornell.edu/wex/unconscionability',
                summary: 'Recognized that complete voidance is one option, but courts should consider whether less drastic remedies are appropriate.',
                jurisdiction: 'D.C. Circuit',
                year: 1965
              },
              opposingArgument: 'One could argue that the cross-collateral clause is so fundamental to the store\'s business model that the entire contract should be voided rather than rewritten by the court.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'Texas',
                  rule: 'More likely to void entire contract rather than engage in judicial rewriting',
                  difference: 'Conservative approach favoring complete voidance over severance'
                }
              ],
              policyConsiderations: 'Complete voidance may be unnecessarily harsh and could discourage legitimate business relationships. It should be reserved for cases where severance is impossible.',
              practiceAreaApplications: ['Contract Litigation', 'Restitution Claims'],
              xpGain: 30,
              consequence: 'neutral'
            },
            {
              id: 'damages-only',
              text: 'Seek monetary damages for the harm caused by the unconscionable clause',
              isCorrect: false,
              explanation: 'Damages are typically not the primary remedy for unconscionability. The focus is on preventing enforcement of unfair terms.',
              detailedExplanation: 'Unconscionability is primarily an equitable defense that prevents enforcement of unfair terms. While damages might be available in some cases, the main remedy is refusing to enforce the unconscionable provision.',
              primaryAuthority: {
                type: 'case',
                citation: 'Restatement (Second) of Contracts § 208',
                bluebookCitation: 'Restatement (Second) of Contracts § 208 (1981)',
                url: 'https://www.law.cornell.edu/wex/unconscionability',
                summary: 'Focuses on preventing enforcement of unconscionable terms rather than awarding damages.',
                jurisdiction: 'American Law Institute',
                year: 1981
              },
              opposingArgument: 'In some cases, damages might be appropriate if the unconscionable clause has already caused harm that cannot be remedied by non-enforcement alone.',
              policyConsiderations: 'Unconscionability is primarily a defensive doctrine aimed at preventing unfair enforcement rather than compensating for past harm.',
              practiceAreaApplications: ['Contract Defense', 'Equitable Relief'],
              xpGain: 25,
              consequence: 'failure'
            },
            {
              id: 'specific-performance',
              text: 'Seek specific performance to force the store to honor a more reasonable payment plan',
              isCorrect: false,
              explanation: 'Specific performance is not the appropriate remedy for unconscionability. It\'s used to compel performance of valid contracts.',
              detailedExplanation: 'Specific performance compels a party to perform their contractual obligations. Here, the issue is preventing enforcement of unconscionable terms, not compelling performance. The remedy is defensive (preventing enforcement) rather than affirmative (compelling action).',
              primaryAuthority: {
                type: 'case',
                citation: 'Restatement (Second) of Contracts § 359',
                bluebookCitation: 'Restatement (Second) of Contracts § 359 (1981)',
                url: 'https://www.law.cornell.edu/wex/specific_performance',
                summary: 'Specific performance is available to compel performance of valid contractual obligations, not to remedy unconscionable terms.',
                jurisdiction: 'American Law Institute',
                year: 1981
              },
              opposingArgument: 'No reasonable argument exists for specific performance in an unconscionability case, as the doctrine is defensive rather than affirmative.',
              policyConsiderations: 'Specific performance requires valid, enforceable contracts. Unconscionable contracts or clauses cannot be the basis for specific performance.',
              practiceAreaApplications: ['Contract Enforcement', 'Real Estate Law'],
              xpGain: 20,
              consequence: 'failure'
            },
            {
              id: 'punitive-damages',
              text: 'Seek punitive damages to punish the store for using unconscionable contract terms',
              isCorrect: false,
              explanation: 'Punitive damages are rarely available in contract cases and not typically awarded for unconscionability alone.',
              detailedExplanation: 'Punitive damages in contract law require exceptional circumstances, typically involving fraud or malicious conduct. Unconscionability alone, while unfair, doesn\'t usually rise to the level warranting punitive damages. The remedy focuses on preventing enforcement, not punishment.',
              primaryAuthority: {
                type: 'case',
                citation: 'Restatement (Second) of Contracts § 355',
                bluebookCitation: 'Restatement (Second) of Contracts § 355 (1981)',
                url: 'https://www.law.cornell.edu/wex/punitive_damages',
                summary: 'Punitive damages in contract cases are limited to exceptional circumstances involving malicious or fraudulent conduct.',
                jurisdiction: 'American Law Institute',
                year: 1981
              },
              opposingArgument: 'In extreme cases involving deliberate exploitation of vulnerable consumers, some courts might consider punitive damages if the conduct rises to the level of fraud or intentional misconduct.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'California',
                  rule: 'Allows punitive damages in contract cases only for conduct constituting fraud or malice',
                  difference: 'Requires independent tort conduct beyond mere breach'
                }
              ],
              policyConsiderations: 'Contract law generally focuses on compensation rather than punishment. Punitive damages could undermine the predictability essential to commercial relationships.',
              practiceAreaApplications: ['Tort Law', 'Consumer Protection with Fraud Elements'],
              xpGain: 15,
              consequence: 'failure'
            }
          ]
        },
        {
          id: 'ethical-considerations',
          title: 'Professional Responsibility',
          scenario: 'After successfully challenging the unconscionable contract, Walker-Thomas Furniture\'s attorney approaches you. They offer your client a "settlement" that would give her a small discount but require her to waive all claims and agree to binding arbitration for future disputes.',
          question: 'What are your primary ethical obligations in advising your client about this settlement offer?',
          skillFocus: 'ethics',
          backgroundContext: 'Professional responsibility rules govern how lawyers must handle settlement negotiations and client counseling. These rules protect both clients and the integrity of the legal system.',
          practicalImportance: 'Ethical violations in settlement negotiations can result in disciplinary action, malpractice liability, and harm to clients. Understanding these obligations is essential for every practicing attorney.',
          choices: [
            {
              id: 'full-disclosure-counseling',
              text: 'Provide complete information about the settlement terms, explain the legal implications of waiving claims and arbitration clauses, and ensure the client makes an informed decision',
              isCorrect: true,
              explanation: 'Correct! Model Rule 2.1 requires lawyers to provide candid advice and consider all relevant factors. You must fully inform the client about the implications of the settlement.',
              detailedExplanation: 'Model Rule 2.1 requires lawyers to exercise independent professional judgment and render candid advice. This includes explaining legal implications, considering moral/economic/social factors, and ensuring informed client decision-making. You must explain what waiving claims means and the pros/cons of arbitration.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 2.1',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 2.1 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_2_1_advisor/',
                summary: 'Requires lawyers to exercise independent professional judgment and render candid advice considering legal, moral, economic, social and political factors.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              relatedAuthorities: [
                {
                  type: 'rule',
                  citation: 'Model Rules of Professional Conduct Rule 1.2',
                  bluebookCitation: 'Model Rules of Prof\'l Conduct r. 1.2 (Am. Bar Ass\'n 2020)',
                  url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_2_scope_of_representation_allocation_of_authority_between_client_lawyer/',
                  summary: 'Establishes that clients make decisions about settlement, while lawyers provide advice.',
                  jurisdiction: 'American Bar Association',
                  year: 2020
                }
              ],
              opposingArgument: 'Some might argue that lawyers should make strong recommendations rather than just providing information, especially when they believe a settlement is clearly against the client\'s interests.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'California',
                  rule: 'Similar to Model Rules but with additional disclosure requirements for arbitration clauses',
                  difference: 'More specific requirements for explaining arbitration implications'
                },
                {
                  jurisdiction: 'New York',
                  rule: 'Follows Model Rules with emphasis on client autonomy in settlement decisions',
                  difference: 'Strong protection of client decision-making authority'
                }
              ],
              policyConsiderations: 'These rules balance lawyer expertise with client autonomy, ensuring clients receive competent advice while maintaining ultimate decision-making authority.',
              practiceAreaApplications: ['All Practice Areas', 'Settlement Negotiations', 'Client Counseling', 'Professional Responsibility'],
              relatedConcepts: [
                {
                  name: 'Informed Consent',
                  description: 'Client agreement based on adequate information and understanding',
                  relationship: 'Essential component of ethical client counseling'
                },
                {
                  name: 'Client Autonomy',
                  description: 'Client\'s right to make fundamental decisions about representation',
                  relationship: 'Core principle underlying settlement decision-making rules'
                }
              ],
              xpGain: 90,
              skillBonus: 'ethics',
              consequence: 'success'
            },
            {
              id: 'recommend-rejection',
              text: 'Strongly recommend rejecting the settlement because arbitration clauses are generally unfavorable to consumers',
              isCorrect: false,
              explanation: 'While you can give your professional opinion, you shouldn\'t make the decision for the client. Your role is to inform and advise, not decide.',
              detailedExplanation: 'Model Rule 1.2 establishes that clients make decisions about settlement. While you should explain the implications of arbitration clauses, including potential disadvantages, the client must make the ultimate decision about accepting or rejecting settlement offers.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 1.2',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 1.2 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_2_scope_of_representation_allocation_of_authority_between_client_lawyer/',
                summary: 'Allocates authority between client and lawyer, reserving settlement decisions to the client.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              opposingArgument: 'Lawyers have expertise that clients lack and should provide strong guidance, especially when they believe a course of action is clearly harmful to the client.',
              policyConsiderations: 'While lawyer expertise is valuable, client autonomy is a fundamental principle that prevents paternalistic decision-making by lawyers.',
              practiceAreaApplications: ['Settlement Negotiations', 'Client Counseling'],
              xpGain: 35,
              consequence: 'neutral'
            },
            {
              id: 'accept-immediately',
              text: 'Recommend immediate acceptance since any settlement is better than continued litigation costs',
              isCorrect: false,
              explanation: 'This fails to properly analyze the settlement terms or consider the client\'s best interests. You must thoroughly evaluate any settlement offer.',
              detailedExplanation: 'Model Rule 2.1 requires competent advice based on thorough analysis. Recommending immediate acceptance without evaluating the terms, considering alternatives, or assessing the client\'s specific situation violates your duty to provide competent representation.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 1.1',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 1.1 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_1_competence/',
                summary: 'Requires lawyers to provide competent representation through legal knowledge, skill, thoroughness and preparation.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              opposingArgument: 'No reasonable argument exists for recommending immediate acceptance without proper analysis, as this clearly violates competence requirements.',
              policyConsiderations: 'Competent representation is fundamental to the attorney-client relationship and the integrity of the legal system.',
              practiceAreaApplications: ['All Practice Areas', 'Professional Responsibility'],
              xpGain: 20,
              consequence: 'failure'
            },
            {
              id: 'negotiate-better-terms',
              text: 'Negotiate better settlement terms without consulting the client since you know what\'s best for her',
              isCorrect: false,
              explanation: 'You cannot make settlement decisions without client consultation. Model Rule 1.2 requires client involvement in settlement decisions.',
              detailedExplanation: 'Model Rule 1.2(a) specifically states that lawyers must abide by client decisions concerning settlement. You cannot negotiate or accept settlement terms without client authorization. The client, not the lawyer, decides whether to settle and on what terms.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 1.2',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 1.2 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_2_scope_of_representation_allocation_of_authority_between_client_lawyer/',
                summary: 'Explicitly requires client consultation and consent for settlement decisions.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              opposingArgument: 'No reasonable argument exists for making settlement decisions without client authorization, as this clearly violates fundamental ethical rules.',
              policyConsiderations: 'Client autonomy in settlement decisions is essential to maintaining trust in the attorney-client relationship and preventing lawyer overreach.',
              practiceAreaApplications: ['Settlement Negotiations', 'Professional Responsibility'],
              xpGain: 15,
              consequence: 'failure'
            },
            {
              id: 'conflict-check',
              text: 'First check for conflicts of interest since the opposing attorney approached you directly',
              isCorrect: false,
              explanation: 'While conflict checking is important, it\'s not the primary ethical issue here. The opposing attorney making a settlement offer is normal and doesn\'t create a conflict.',
              detailedExplanation: 'Settlement offers from opposing counsel are routine and don\'t create conflicts of interest. Your primary ethical obligation is providing competent advice about the settlement terms. Conflict of interest would arise if you had some relationship with the opposing party that could affect your representation.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 1.7',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 1.7 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_7_conflict_of_interest_current_clients/',
                summary: 'Defines conflicts of interest as situations where representation may be materially limited by lawyer\'s responsibilities to other clients or third parties.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              opposingArgument: 'While routine settlement communications don\'t create conflicts, it\'s always good practice to be aware of potential conflict issues.',
              policyConsiderations: 'Conflict rules protect client interests, but routine settlement negotiations are expected and don\'t typically raise conflict concerns.',
              practiceAreaApplications: ['Professional Responsibility', 'Conflict Analysis'],
              xpGain: 25,
              consequence: 'failure'
            }
          ]
        },
        {
          id: 'precedent-application',
          title: 'Applying Legal Precedent',
          scenario: 'You\'re now handling a similar case involving a payday loan company. The contract requires borrowers to pay $15 for every $100 borrowed, due in two weeks (equivalent to 390% APR). The contract also includes a mandatory arbitration clause and class action waiver.',
          question: 'How should you apply the Williams v. Walker-Thomas precedent to this new case?',
          skillFocus: 'research',
          backgroundContext: 'Legal precedent application is a fundamental skill requiring identification of legal principles from prior cases and their application to new factual situations.',
          practicalImportance: 'Precedent application is central to legal reasoning and advocacy. Courts rely on lawyers to properly analogize and distinguish cases to reach just results.',
          choices: [
            {
              id: 'analogize-unconscionability',
              text: 'Argue that like Walker-Thomas, this contract is unconscionable due to both procedural unfairness (disparity in bargaining power, complex terms) and substantive unfairness (extremely high interest rates)',
              isCorrect: true,
              explanation: 'Correct! This properly applies the Williams precedent by identifying both procedural and substantive unconscionability elements in the new factual context.',
              detailedExplanation: 'Legal precedent application requires identifying the legal principle from the precedent case and applying it to new facts. Williams established that unconscionability requires both procedural and substantive elements. Here, the payday loan context shows similar procedural issues (desperate borrowers, complex terms) and substantive issues (390% APR vs. cross-collateral clause).',
              primaryAuthority: {
                type: 'case',
                citation: 'Williams v. Walker-Thomas Furniture Co.',
                bluebookCitation: 'Williams v. Walker-Thomas Furniture Co., 350 F.2d 445 (D.C. Cir. 1965)',
                url: 'https://www.law.cornell.edu/wex/unconscionability',
                summary: 'Established the unconscionability doctrine requiring both procedural and substantive unfairness.',
                jurisdiction: 'D.C. Circuit',
                year: 1965
              },
              relatedAuthorities: [
                {
                  type: 'case',
                  citation: 'Gatton v. T-Mobile USA, Inc.',
                  bluebookCitation: 'Gatton v. T-Mobile USA, Inc., 152 Cal.App.4th 571 (2007)',
                  url: 'https://www.law.cornell.edu/wex/unconscionability',
                  summary: 'Applied unconscionability doctrine to modern consumer contracts with arbitration clauses.',
                  jurisdiction: 'California Court of Appeal',
                  year: 2007
                }
              ],
              opposingArgument: 'The payday lender would argue that borrowers voluntarily seek these loans, understand the terms, and that high rates reflect the high risk of default in this market segment.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'Federal Courts',
                  rule: 'Apply state unconscionability law, but federal arbitration law may limit remedies',
                  difference: 'Federal Arbitration Act may preempt some state unconscionability applications'
                },
                {
                  jurisdiction: 'State Courts',
                  rule: 'Full application of state unconscionability doctrine',
                  difference: 'Broader remedial options available in state court'
                }
              ],
              policyConsiderations: 'Applying unconscionability to payday loans balances access to credit for high-risk borrowers with protection from predatory lending practices.',
              practiceAreaApplications: ['Consumer Protection', 'Financial Services Litigation', 'Class Action', 'Arbitration Law'],
              relatedConcepts: [
                {
                  name: 'Predatory Lending',
                  description: 'Lending practices that impose unfair or abusive terms on borrowers',
                  relationship: 'Modern application of unconscionability principles to financial services'
                },
                {
                  name: 'Federal Arbitration Act',
                  description: 'Federal law favoring arbitration agreements',
                  relationship: 'May limit unconscionability challenges to arbitration clauses'
                }
              ],
              xpGain: 95,
              skillBonus: 'research',
              consequence: 'success'
            },
            {
              id: 'distinguish-different-context',
              text: 'Distinguish Williams as inapplicable because it involved furniture sales, not financial services, which are heavily regulated',
              isCorrect: false,
              explanation: 'This misunderstands how legal precedent works. The legal principle (unconscionability doctrine) applies across different contexts, not just furniture sales.',
              detailedExplanation: 'Legal precedents establish principles that apply beyond their specific factual contexts. Williams didn\'t create a furniture-specific rule; it established the general unconscionability doctrine. The principle applies to any contract, regardless of the subject matter, when the procedural and substantive elements are met.',
              primaryAuthority: {
                type: 'case',
                citation: 'Marbury v. Madison',
                bluebookCitation: 'Marbury v. Madison, 5 U.S. (1 Cranch) 137 (1803)',
                url: 'https://www.law.cornell.edu/supremecourt/text/5/137',
                summary: 'Established principles of judicial review and precedent application across different factual contexts.',
                jurisdiction: 'U.S. Supreme Court',
                year: 1803
              },
              opposingArgument: 'One might argue that financial services regulation provides specific protections that make general unconscionability doctrine unnecessary, but this ignores gaps in regulatory coverage.',
              policyConsiderations: 'Legal principles must be flexible enough to apply to new situations, or the law would become obsolete as society evolves.',
              practiceAreaApplications: ['Legal Research', 'Precedent Analysis'],
              xpGain: 25,
              consequence: 'failure'
            },
            {
              id: 'focus-only-interest-rates',
              text: 'Argue unconscionability based solely on the high interest rates, since 390% APR is clearly excessive',
              isCorrect: false,
              explanation: 'While high interest rates support unconscionability, Williams requires both procedural and substantive elements. Focusing only on rates ignores the procedural component.',
              detailedExplanation: 'Williams established that unconscionability typically requires both procedural and substantive elements. While 390% APR is substantively unconscionable, you must also address procedural unconscionability (bargaining process, disparity in power, lack of alternatives) for the strongest argument.',
              primaryAuthority: {
                type: 'case',
                citation: 'Williams v. Walker-Thomas Furniture Co.',
                bluebookCitation: 'Williams v. Walker-Thomas Furniture Co., 350 F.2d 445 (D.C. Cir. 1965)',
                url: 'https://www.law.cornell.edu/wex/unconscionability',
                summary: 'Established that unconscionability requires both procedural and substantive elements.',
                jurisdiction: 'D.C. Circuit',
                year: 1965
              },
              opposingArgument: 'In extreme cases, some courts might find unconscionability based primarily on substantive unfairness, but this is a weaker argument than addressing both elements.',
              policyConsiderations: 'Focusing only on substantive terms ignores the importance of fair bargaining processes in contract formation.',
              practiceAreaApplications: ['Consumer Protection', 'Contract Litigation'],
              xpGain: 40,
              consequence: 'neutral'
            },
            {
              id: 'federal-preemption',
              text: 'Argue that federal banking regulations preempt state unconscionability law in financial services',
              isCorrect: false,
              explanation: 'This is incorrect. Federal banking regulations don\'t typically preempt state unconscionability law, and payday lenders often aren\'t federally regulated banks.',
              detailedExplanation: 'Federal preemption requires clear congressional intent to displace state law. While some federal banking laws preempt certain state regulations, unconscionability is a fundamental contract defense that courts apply even in regulated industries. Payday lenders are often state-licensed, not federally regulated banks.',
              primaryAuthority: {
                type: 'case',
                citation: 'Watters v. Wachovia Bank, N.A.',
                bluebookCitation: 'Watters v. Wachovia Bank, N.A., 550 U.S. 1 (2007)',
                url: 'https://www.law.cornell.edu/supremecourt/text/550/1',
                summary: 'Addressed federal preemption of state banking regulation, but did not eliminate state contract law defenses.',
                jurisdiction: 'U.S. Supreme Court',
                year: 2007
              },
              opposingArgument: 'Some federal banking laws do preempt state regulations, but unconscionability is generally considered a fundamental contract defense not subject to preemption.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'National Banks',
                  rule: 'Some federal preemption of state lending regulations',
                  difference: 'Limited preemption that typically doesn\'t reach unconscionability'
                }
              ],
              policyConsiderations: 'Preemption analysis must balance federal regulatory uniformity with state authority over fundamental contract principles.',
              practiceAreaApplications: ['Banking Law', 'Federal Preemption', 'Constitutional Law'],
              xpGain: 20,
              consequence: 'failure'
            },
            {
              id: 'class-action-focus',
              text: 'Focus primarily on challenging the class action waiver rather than the underlying loan terms',
              isCorrect: false,
              explanation: 'While class action waivers can be unconscionable, this doesn\'t fully utilize the Williams precedent, which would support challenging the entire contract structure.',
              detailedExplanation: 'Class action waivers can be unconscionable, but Williams provides a framework for challenging the entire contract. The high interest rates and overall contract structure present stronger unconscionability arguments than focusing solely on the class action waiver.',
              primaryAuthority: {
                type: 'case',
                citation: 'AT&T Mobility LLC v. Concepcion',
                bluebookCitation: 'AT&T Mobility LLC v. Concepcion, 563 U.S. 333 (2011)',
                url: 'https://www.law.cornell.edu/supremecourt/text/563/333',
                summary: 'Limited state law challenges to class action waivers in arbitration agreements, but left room for unconscionability challenges.',
                jurisdiction: 'U.S. Supreme Court',
                year: 2011
              },
              opposingArgument: 'Class action waivers may be the most vulnerable part of the contract under current federal arbitration law, making them a strategic focus.',
              policyConsiderations: 'Federal arbitration policy favors enforcement of arbitration agreements, but unconscionability remains a viable challenge.',
              practiceAreaApplications: ['Class Action', 'Arbitration Law', 'Consumer Protection'],
              xpGain: 35,
              consequence: 'neutral'
            }
          ]
        }
      ]
    }
  ],
  negotiation: [
    {
      id: 'devils-bargain-ethics',
      title: 'The Devil\'s Bargain: Ethical Negotiation',
      description: 'Navigate the treacherous waters of legal negotiation where truth and deception dance in shadow.',
      introduction: 'You enter the negotiation chamber where words are weapons and silence can be golden...',
      minCorrectAnswers: 3,
      successOutcome: 'Your ethical mastery of negotiation has secured victory! The shadow entities respect your principled approach to the dark arts of legal bargaining.',
      failureOutcome: 'The complexities of ethical negotiation have proven challenging. You retreat to study the ancient codes of professional conduct.',
      questions: [
        {
          id: 'truthfulness-obligation',
          title: 'The Duty of Truthfulness',
          scenario: 'You\'re negotiating a settlement for your client who was injured in a car accident. The opposing counsel asks directly: "Does your client have any pre-existing back injuries?" Your client had minor back pain years ago but it was unrelated to this accident and fully resolved.',
          question: 'What is your ethical obligation regarding this question?',
          skillFocus: 'ethics',
          backgroundContext: 'Model Rule 4.1 governs truthfulness in statements to others and is fundamental to maintaining integrity in legal negotiations.',
          practicalImportance: 'Truthfulness obligations in negotiations affect every practicing attorney and can result in disciplinary action, sanctions, and malpractice liability if violated.',
          choices: [
            {
              id: 'truthful-disclosure',
              text: 'Answer truthfully that your client had minor, resolved back issues years ago, but clarify they are unrelated to the current injury',
              isCorrect: true,
              explanation: 'Correct! Model Rule 4.1 requires truthfulness in statements to others. You must answer honestly but can provide context to prevent misunderstanding.',
              detailedExplanation: 'Model Rule 4.1 prohibits false statements of material fact to third parties. A direct question about pre-existing injuries requires a truthful answer. However, you can and should provide context to ensure your truthful statement isn\'t misleading. This maintains ethical integrity while protecting your client\'s interests.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 4.1',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 4.1 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_4_1_truthfulness_in_statements_to_others/',
                summary: 'Prohibits false statements of material fact to third parties and requires disclosure when necessary to avoid assisting criminal or fraudulent acts.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              relatedAuthorities: [
                {
                  type: 'case',
                  citation: 'In re Doe',
                  bluebookCitation: 'In re Doe, 801 F. Supp. 478 (D.N.M. 1992)',
                  url: 'https://www.law.cornell.edu/wex/professional_responsibility',
                  summary: 'Court sanctioned attorney for making false statements during settlement negotiations.',
                  jurisdiction: 'D.N.M.',
                  year: 1992
                }
              ],
              opposingArgument: 'Some might argue that volunteering information beyond what\'s directly asked could harm the client\'s negotiating position unnecessarily.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'California',
                  rule: 'Similar to Model Rule 4.1 with additional disclosure requirements in certain contexts',
                  difference: 'More specific guidance on disclosure obligations'
                },
                {
                  jurisdiction: 'New York',
                  rule: 'Follows Model Rule 4.1 with emphasis on materiality of facts',
                  difference: 'Focus on whether facts are material to the negotiation'
                }
              ],
              policyConsiderations: 'Truthfulness requirements maintain the integrity of the legal system and negotiations while allowing lawyers to advocate zealously within ethical bounds.',
              practiceAreaApplications: ['Personal Injury', 'Settlement Negotiations', 'All Litigation', 'Transactional Work'],
              relatedConcepts: [
                {
                  name: 'Zealous Advocacy',
                  description: 'Lawyer\'s duty to advocate vigorously for client within ethical bounds',
                  relationship: 'Must be balanced with truthfulness obligations'
                },
                {
                  name: 'Material Facts',
                  description: 'Facts that would influence a reasonable person\'s decision',
                  relationship: 'Determines scope of truthfulness obligations'
                }
              ],
              xpGain: 85,
              skillBonus: 'ethics',
              consequence: 'success'
            },
            {
              id: 'refuse-to-answer',
              text: 'Refuse to answer the question, stating that you\'re not required to provide information that could harm your client\'s case',
              isCorrect: false,
              explanation: 'While you\'re not required to volunteer harmful information, you cannot refuse to answer direct questions with false or misleading responses.',
              detailedExplanation: 'Model Rule 4.1 distinguishes between volunteering information (not required) and responding to direct questions (must be truthful). You can refuse to answer, but this might raise suspicions. The better approach is truthful disclosure with appropriate context.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 4.1',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 4.1 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_4_1_truthfulness_in_statements_to_others/',
                summary: 'Requires truthfulness in statements made, but doesn\'t require volunteering information.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              opposingArgument: 'Lawyers have no general duty to provide information that harms their client, and refusing to answer preserves client confidentiality.',
              policyConsiderations: 'While lawyers need not volunteer harmful information, refusing to answer direct questions may undermine negotiation effectiveness.',
              practiceAreaApplications: ['Negotiation Strategy', 'Professional Responsibility'],
              xpGain: 40,
              consequence: 'neutral'
            },
            {
              id: 'deny-pre-existing',
              text: 'State that your client has no relevant pre-existing injuries since the old back pain was minor and unrelated',
              isCorrect: false,
              explanation: 'This could be seen as misleading. The question asked about "any" pre-existing back injuries, not just relevant ones.',
              detailedExplanation: 'While the old injury may be irrelevant, the question specifically asked about "any" pre-existing back injuries. Answering "no" when there was a prior back issue, even if minor and unrelated, could be considered a false statement of fact under Model Rule 4.1.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 4.1',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 4.1 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_4_1_truthfulness_in_statements_to_others/',
                summary: 'Prohibits false statements of material fact, regardless of lawyer\'s interpretation of relevance.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              opposingArgument: 'The lawyer might argue that "relevant" injuries was the implied scope of the question, making the answer technically truthful.',
              policyConsiderations: 'Allowing lawyers to interpret questions narrowly could undermine the truthfulness requirement and negotiation integrity.',
              practiceAreaApplications: ['Professional Responsibility', 'Disciplinary Proceedings'],
              xpGain: 25,
              consequence: 'failure'
            },
            {
              id: 'redirect-question',
              text: 'Redirect the conversation by asking about their client\'s driving record instead of answering the question',
              isCorrect: false,
              explanation: 'Avoiding a direct question without answering it could be seen as evasive and potentially misleading.',
              detailedExplanation: 'While tactical redirection is a negotiation technique, completely avoiding a direct question about material facts without providing any response could violate the duty of good faith in negotiations and might be seen as misleading conduct.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 4.1',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 4.1 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_4_1_truthfulness_in_statements_to_others/',
                summary: 'Requires truthfulness and prohibits conduct that could be misleading.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              opposingArgument: 'Redirection is a legitimate negotiation tactic that doesn\'t involve making false statements.',
              policyConsiderations: 'While redirection may be tactically sound, it could undermine the truthfulness and good faith expected in legal negotiations.',
              practiceAreaApplications: ['Negotiation Tactics', 'Professional Responsibility'],
              xpGain: 20,
              consequence: 'failure'
            },
            {
              id: 'client-confidentiality',
              text: 'Claim attorney-client privilege prevents you from answering questions about your client\'s medical history',
              isCorrect: false,
              explanation: 'Attorney-client privilege doesn\'t prevent truthful statements about facts. The privilege protects communications, not underlying facts.',
              detailedExplanation: 'Attorney-client privilege protects confidential communications between attorney and client, not the underlying facts themselves. Medical history facts aren\'t privileged communications. Moreover, in personal injury cases, medical history is typically discoverable and not protected.',
              primaryAuthority: {
                type: 'case',
                citation: 'Upjohn Co. v. United States',
                bluebookCitation: 'Upjohn Co. v. United States, 449 U.S. 383 (1981)',
                url: 'https://www.law.cornell.edu/supremecourt/text/449/383',
                summary: 'Defined scope of attorney-client privilege as protecting communications, not underlying facts.',
                jurisdiction: 'U.S. Supreme Court',
                year: 1981
              },
              opposingArgument: 'Some might argue that medical information learned from the client is protected, but this misunderstands the privilege scope.',
              policyConsiderations: 'Misapplying privilege could undermine both the privilege doctrine and truthfulness requirements.',
              practiceAreaApplications: ['Evidence Law', 'Professional Responsibility', 'Discovery'],
              xpGain: 15,
              consequence: 'failure'
            }
          ]
        },
        {
          id: 'puffery-vs-misrepresentation',
          title: 'The Line Between Puffery and Fraud',
          scenario: 'During contract negotiations for a business acquisition, the opposing counsel asks about your client\'s financial projections. Your client believes they can achieve 20% growth next year, but their historical average is 8%. You know the industry average is 12%.',
          question: 'How should you respond when asked about your client\'s growth prospects?',
          skillFocus: 'negotiation',
          backgroundContext: 'The distinction between permissible negotiation puffery and prohibited misrepresentation is crucial in business negotiations and affects both ethical obligations and potential liability.',
          practicalImportance: 'Understanding this distinction protects lawyers from disciplinary action and clients from fraud liability while enabling effective advocacy in negotiations.',
          choices: [
            {
              id: 'honest-projection-with-context',
              text: 'State that your client projects 20% growth based on their business plan, while noting this exceeds their historical performance and providing relevant context',
              isCorrect: true,
              explanation: 'Correct! This provides truthful information about the client\'s genuine projections while giving context that prevents misunderstanding.',
              detailedExplanation: 'This approach satisfies Model Rule 4.1\'s truthfulness requirement while providing sufficient context to avoid misleading the other party. Projections based on genuine business planning are permissible if presented honestly with appropriate caveats.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 4.1',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 4.1 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_4_1_truthfulness_in_statements_to_others/',
                summary: 'Requires truthfulness while allowing advocacy within bounds of honest representation.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              relatedAuthorities: [
                {
                  type: 'case',
                  citation: 'Restatement (Second) of Contracts § 168',
                  bluebookCitation: 'Restatement (Second) of Contracts § 168 (1981)',
                  url: 'https://www.law.cornell.edu/wex/misrepresentation',
                  summary: 'Distinguishes between actionable misrepresentation and permissible expressions of opinion or prediction.',
                  jurisdiction: 'American Law Institute',
                  year: 1981
                }
              ],
              opposingArgument: 'Some might argue that any mention of optimistic projections could be misleading, but honest projections with context are generally permissible.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'Delaware',
                  rule: 'Business judgment rule protects honest business projections',
                  difference: 'More protection for good faith business projections'
                },
                {
                  jurisdiction: 'Securities Law Context',
                  rule: 'Stricter requirements for forward-looking statements',
                  difference: 'Additional safe harbor provisions and disclosure requirements'
                }
              ],
              policyConsiderations: 'Allowing honest projections with context enables effective business negotiations while protecting against fraud.',
              practiceAreaApplications: ['Business Transactions', 'M&A', 'Securities Law', 'Contract Negotiations'],
              relatedConcepts: [
                {
                  name: 'Forward-Looking Statements',
                  description: 'Predictions about future performance with appropriate disclaimers',
                  relationship: 'Legal framework for presenting business projections'
                },
                {
                  name: 'Due Diligence',
                  description: 'Investigation process that should verify representations',
                  relationship: 'Counterparty\'s responsibility to investigate claims'
                }
              ],
              xpGain: 90,
              skillBonus: 'negotiation',
              consequence: 'success'
            },
            {
              id: 'claim-exceptional-growth',
              text: 'Emphasize the 20% projection as achievable based on your client\'s superior management and market position',
              isCorrect: false,
              explanation: 'This could be misleading puffery that crosses into misrepresentation, especially without disclosing the historical performance gap.',
              detailedExplanation: 'While some puffery is permissible in negotiations, claiming superior performance without disclosing contrary historical data could constitute misrepresentation. The failure to provide context about historical performance makes this potentially misleading.',
              primaryAuthority: {
                type: 'case',
                citation: 'Restatement (Second) of Torts § 525',
                bluebookCitation: 'Restatement (Second) of Torts § 525 (1977)',
                url: 'https://www.law.cornell.edu/wex/misrepresentation',
                summary: 'Defines fraudulent misrepresentation including half-truths that mislead.',
                jurisdiction: 'American Law Institute',
                year: 1977
              },
              opposingArgument: 'Business negotiations typically involve optimistic projections, and the other party should conduct due diligence.',
              policyConsiderations: 'Allowing excessive puffery without context could undermine trust in business negotiations.',
              practiceAreaApplications: ['Business Litigation', 'Professional Responsibility'],
              xpGain: 30,
              consequence: 'failure'
            },
            {
              id: 'refuse-financial-discussion',
              text: 'Decline to discuss financial projections, stating they are confidential business information',
              isCorrect: false,
              explanation: 'While you can refuse to discuss confidential information, this may not be the most effective negotiation strategy and could raise suspicions.',
              detailedExplanation: 'Refusing to discuss financial projections in a business acquisition context may be counterproductive and could signal problems. While legally permissible, it may not serve the client\'s interests in completing the transaction.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 1.1',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 1.1 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_1_competence/',
                summary: 'Requires competent representation including effective advocacy strategies.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              opposingArgument: 'Protecting confidential information is important, and the other party can request formal disclosure if needed.',
              policyConsiderations: 'While confidentiality is important, effective negotiation often requires some information sharing.',
              practiceAreaApplications: ['Negotiation Strategy', 'Business Transactions'],
              xpGain: 35,
              consequence: 'neutral'
            },
            {
              id: 'historical-average-only',
              text: 'State only the historical 8% average growth without mentioning current projections or industry comparisons',
              isCorrect: false,
              explanation: 'While truthful, this may not adequately represent your client\'s current business prospects and could be seen as inadequate advocacy.',
              detailedExplanation: 'Providing only historical data without current projections may not fully represent the client\'s position. While not unethical, it may not constitute zealous advocacy if the client has legitimate reasons for optimistic projections.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 1.3',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 1.3 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_3_diligence/',
                summary: 'Requires zealous advocacy within ethical bounds.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              opposingArgument: 'Conservative disclosure protects against misrepresentation claims while providing truthful information.',
              policyConsiderations: 'Overly conservative advocacy may not serve client interests in competitive negotiations.',
              practiceAreaApplications: ['Negotiation Strategy', 'Client Counseling'],
              xpGain: 40,
              consequence: 'neutral'
            },
            {
              id: 'industry-comparison-focus',
              text: 'Focus on the 12% industry average as a benchmark, suggesting your client can exceed it without specific commitments',
              isCorrect: false,
              explanation: 'This avoids the client\'s actual projections and historical performance, which could be seen as evasive or misleading.',
              detailedExplanation: 'Using industry averages without disclosing the client\'s specific situation could be misleading. It neither provides the client\'s actual projections nor acknowledges their historical underperformance relative to industry standards.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 4.1',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 4.1 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_4_1_truthfulness_in_statements_to_others/',
                summary: 'Prohibits statements that are misleading even if technically true.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              opposingArgument: 'Industry benchmarks provide relevant context for evaluating business performance.',
              policyConsiderations: 'Using industry data without client-specific context could mislead the other party about actual prospects.',
              practiceAreaApplications: ['Professional Responsibility', 'Business Negotiations'],
              xpGain: 25,
              consequence: 'failure'
            }
          ]
        },
        {
          id: 'confidentiality-vs-disclosure',
          title: 'Balancing Confidentiality and Disclosure',
          scenario: 'During settlement negotiations in an employment discrimination case, opposing counsel asks if your client has filed similar claims against other employers. Your client has filed two previous EEOC complaints that were dismissed, but this information is not public and could harm settlement prospects.',
          question: 'How should you handle this inquiry?',
          skillFocus: 'ethics',
          backgroundContext: 'Balancing client confidentiality with truthfulness obligations is a common challenge in litigation, requiring careful analysis of ethical rules and strategic considerations.',
          practicalImportance: 'This situation arises frequently in employment law and other areas where past claims or conduct may be relevant to current disputes.',
          choices: [
            {
              id: 'truthful-disclosure-with-context',
              text: 'Disclose the previous complaints but provide context about their dismissal and distinguish them from the current case',
              isCorrect: true,
              explanation: 'Correct! You must be truthful about material facts while providing context that prevents misunderstanding and protects your client\'s interests.',
              detailedExplanation: 'Model Rule 4.1 requires truthfulness in response to direct questions about material facts. Previous EEOC complaints are likely material to settlement negotiations. However, you can and should provide context about dismissals and factual distinctions to prevent misleading impressions.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 4.1',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 4.1 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_4_1_truthfulness_in_statements_to_others/',
                summary: 'Requires truthfulness in statements to third parties while allowing advocacy through context and explanation.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              relatedAuthorities: [
                {
                  type: 'rule',
                  citation: 'Model Rules of Professional Conduct Rule 1.6',
                  bluebookCitation: 'Model Rules of Prof\'l Conduct r. 1.6 (Am. Bar Ass\'n 2020)',
                  url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_6_confidentiality_of_information/',
                  summary: 'Protects client confidentiality but allows disclosure when necessary to comply with other ethical obligations.',
                  jurisdiction: 'American Bar Association',
                  year: 2020
                }
              ],
              opposingArgument: 'Some might argue that previous dismissed complaints are not material to the current case and need not be disclosed.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'California',
                  rule: 'Similar approach but with additional protections for employment discrimination claimants',
                  difference: 'May have stronger confidentiality protections for discrimination complaints'
                }
              ],
              policyConsiderations: 'Truthfulness in negotiations maintains system integrity while allowing zealous advocacy through proper contextualization.',
              practiceAreaApplications: ['Employment Law', 'Civil Rights', 'Settlement Negotiations', 'Professional Responsibility'],
              relatedConcepts: [
                {
                  name: 'Materiality',
                  description: 'Information that would influence a reasonable person\'s decision',
                  relationship: 'Determines scope of disclosure obligations'
                },
                {
                  name: 'Zealous Advocacy',
                  description: 'Vigorous representation within ethical bounds',
                  relationship: 'Achieved through context and explanation, not concealment'
                }
              ],
              xpGain: 85,
              skillBonus: 'ethics',
              consequence: 'success'
            },
            {
              id: 'claim-confidentiality',
              text: 'Refuse to answer, claiming the information is confidential and protected by attorney-client privilege',
              isCorrect: false,
              explanation: 'Previous EEOC complaints are likely public record or discoverable, and attorney-client privilege doesn\'t protect the underlying facts.',
              detailedExplanation: 'EEOC complaints are typically matters of public record or at least discoverable in litigation. Attorney-client privilege protects communications about the complaints, not the fact that they were filed. Claiming privilege for non-privileged information could be seen as misleading.',
              primaryAuthority: {
                type: 'case',
                citation: 'Upjohn Co. v. United States',
                bluebookCitation: 'Upjohn Co. v. United States, 449 U.S. 383 (1981)',
                url: 'https://www.law.cornell.edu/supremecourt/text/449/383',
                summary: 'Defines attorney-client privilege scope as protecting communications, not underlying facts.',
                jurisdiction: 'U.S. Supreme Court',
                year: 1981
              },
              opposingArgument: 'Discussions about filing complaints might be privileged, but the fact of filing is typically not protected.',
              policyConsiderations: 'Misapplying privilege claims could undermine both the privilege doctrine and negotiation integrity.',
              practiceAreaApplications: ['Evidence Law', 'Professional Responsibility'],
              xpGain: 25,
              consequence: 'failure'
            },
            {
              id: 'deny-similar-claims',
              text: 'State that your client has not filed similar claims, arguing that the previous complaints involved different legal theories',
              isCorrect: false,
              explanation: 'This could be misleading even if technically true. The question asks about similar claims, and employment discrimination complaints are generally similar regardless of specific theories.',
              detailedExplanation: 'While different legal theories might distinguish the complaints, they are still employment discrimination claims that would be considered "similar" by most reasonable interpretations. This response risks being misleading under Model Rule 4.1.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 4.1',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 4.1 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_4_1_truthfulness_in_statements_to_others/',
                summary: 'Prohibits statements that are misleading even if technically accurate.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              opposingArgument: 'Different legal theories could make the claims sufficiently distinct to justify this response.',
              policyConsiderations: 'Allowing overly technical interpretations could undermine the truthfulness requirement.',
              practiceAreaApplications: ['Professional Responsibility', 'Employment Law'],
              xpGain: 20,
              consequence: 'failure'
            },
            {
              id: 'redirect-to-current-case',
              text: 'Redirect the conversation to focus on the merits of the current case rather than past complaints',
              isCorrect: false,
              explanation: 'While redirection is a negotiation tactic, completely avoiding a direct question about material facts could be seen as evasive.',
              detailedExplanation: 'Redirection without answering a direct question about material facts may violate the duty of good faith in negotiations and could be seen as misleading conduct under Model Rule 4.1.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 4.1',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 4.1 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_4_1_truthfulness_in_statements_to_others/',
                summary: 'Requires good faith and prohibits misleading conduct in negotiations.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              opposingArgument: 'Focusing on current case merits is legitimate advocacy strategy.',
              policyConsiderations: 'Complete avoidance of material questions could undermine negotiation integrity.',
              practiceAreaApplications: ['Negotiation Strategy', 'Professional Responsibility'],
              xpGain: 30,
              consequence: 'failure'
            },
            {
              id: 'partial-disclosure',
              text: 'Acknowledge that your client has been involved in workplace disputes before but decline to provide specifics',
              isCorrect: false,
              explanation: 'This partial disclosure might be more misleading than helpful, as it acknowledges disputes without providing the context needed for fair evaluation.',
              detailedExplanation: 'Partial disclosure that raises questions without providing sufficient information for evaluation could be more misleading than complete disclosure or refusal to answer. It may violate Model Rule 4.1\'s prohibition on misleading statements.',
              primaryAuthority: {
                type: 'rule',
                citation: 'Model Rules of Professional Conduct Rule 4.1',
                bluebookCitation: 'Model Rules of Prof\'l Conduct r. 4.1 (Am. Bar Ass\'n 2020)',
                url: 'https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_4_1_truthfulness_in_statements_to_others/',
                summary: 'Prohibits half-truths that mislead even if not completely false.',
                jurisdiction: 'American Bar Association',
                year: 2020
              },
              opposingArgument: 'Partial disclosure protects client interests while acknowledging some relevant history.',
              policyConsiderations: 'Half-truths can be more misleading than complete silence or full disclosure.',
              practiceAreaApplications: ['Professional Responsibility', 'Settlement Negotiations'],
              xpGain: 35,
              consequence: 'neutral'
            }
          ]
        }
      ]
    }
  ],
  research: [
    {
      id: 'forbidden-precedent-analysis',
      title: 'The Forbidden Library: Precedent Analysis',
      description: 'Delve into the darkest corners of legal research where ancient precedents hold the keys to victory.',
      introduction: 'The dusty tomes whisper of cases that could change everything, but only the worthy can unlock their secrets...',
      minCorrectAnswers: 2,
      successOutcome: 'You have mastered the ancient arts of legal research! The forbidden precedents bow to your superior analytical skills.',
      failureOutcome: 'The complexities of legal precedent have overwhelmed you. Return when you have studied the ways of analogical reasoning.',
      questions: [
        {
          id: 'precedent-hierarchy',
          title: 'Understanding Precedential Authority',
          scenario: 'You\'re researching a contract interpretation issue for a case in California state court. You find several relevant authorities: a California Supreme Court case from 1995, a 9th Circuit federal case from 2020, a California Court of Appeal case from 2021, and a New York Court of Appeals case from 2019.',
          question: 'Which authority carries the most precedential weight for your California state court case?',
          skillFocus: 'research',
          backgroundContext: 'Understanding the hierarchy of legal authority is fundamental to legal research and determines which sources courts must follow versus those that are merely persuasive.',
          practicalImportance: 'Misunderstanding precedential hierarchy can lead to weak legal arguments, sanctions for frivolous positions, and poor client outcomes.',
          choices: [
            {
              id: 'ca-supreme-court',
              text: 'The California Supreme Court case from 1995 - it\'s binding precedent from the highest state court',
              isCorrect: true,
              explanation: 'Correct! The California Supreme Court is the highest authority for California state law issues, making its decisions binding on all lower California courts.',
              detailedExplanation: 'In the hierarchy of precedent, the California Supreme Court sits at the top for state law issues in California. Even though the 1995 case is older, it remains binding precedent unless overruled. Federal circuit court decisions and out-of-state cases may be persuasive but are not binding on state law issues.',
              primaryAuthority: {
                type: 'case',
                citation: 'Auto Equity Sales, Inc. v. Superior Court',
                bluebookCitation: 'Auto Equity Sales, Inc. v. Superior Court, 57 Cal.2d 450 (1962)',
                url: 'https://www.law.cornell.edu/wex/precedent',
                summary: 'Established the binding nature of California Supreme Court decisions on all lower California courts.',
                jurisdiction: 'California Supreme Court',
                year: 1962
              },
              relatedAuthorities: [
                {
                  type: 'case',
                  citation: 'Marbury v. Madison',
                  bluebookCitation: 'Marbury v. Madison, 5 U.S. (1 Cranch) 137 (1803)',
                  url: 'https://www.law.cornell.edu/supremecourt/text/5/137',
                  summary: 'Established principles of judicial review and precedent in American legal system.',
                  jurisdiction: 'U.S. Supreme Court',
                  year: 1803
                }
              ],
              opposingArgument: 'Some might argue that newer cases reflect more current legal thinking, but binding precedent remains controlling regardless of age.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'Federal Courts',
                  rule: 'U.S. Supreme Court decisions bind all courts; Circuit decisions bind district courts in that circuit',
                  difference: 'Federal hierarchy operates separately from state court hierarchy'
                },
                {
                  jurisdiction: 'Other State Courts',
                  rule: 'Each state\'s highest court is supreme for that state\'s law',
                  difference: 'No binding authority across state lines for state law issues'
                }
              ],
              policyConsiderations: 'Precedential hierarchy ensures legal consistency and predictability while respecting federalism and separation of powers.',
              practiceAreaApplications: ['All Legal Practice Areas', 'Legal Research', 'Brief Writing', 'Appellate Practice'],
              relatedConcepts: [
                {
                  name: 'Stare Decisis',
                  description: 'Doctrine requiring courts to follow established precedent',
                  relationship: 'Fundamental principle underlying precedential hierarchy'
                },
                {
                  name: 'Binding vs. Persuasive Authority',
                  description: 'Distinction between precedent that must be followed versus that which may be considered',
                  relationship: 'Core concept in understanding precedential weight'
                }
              ],
              xpGain: 80,
              skillBonus: 'research',
              consequence: 'success'
            },
            {
              id: 'ninth-circuit',
              text: 'The 9th Circuit federal case from 2020 - it\'s more recent and from a higher federal court',
              isCorrect: false,
              explanation: 'Federal circuit courts don\'t have binding authority over state courts on state law issues, even if they\'re more recent.',
              detailedExplanation: 'While the 9th Circuit is a federal appellate court, it doesn\'t have binding authority over California state courts on matters of state law. Federal courts can only create binding precedent on federal law issues. For state contract law, California state courts follow California Supreme Court precedent.',
              primaryAuthority: {
                type: 'case',
                citation: 'Erie Railroad Co. v. Tompkins',
                bluebookCitation: 'Erie R.R. Co. v. Tompkins, 304 U.S. 64 (1938)',
                url: 'https://www.law.cornell.edu/supremecourt/text/304/64',
                summary: 'Established that federal courts must apply state law in diversity cases and cannot create general federal common law.',
                jurisdiction: 'U.S. Supreme Court',
                year: 1938
              },
              opposingArgument: 'Federal courts often have expertise in complex legal issues and their reasoning may be persuasive.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'Federal Question Cases',
                  rule: 'Federal courts have binding authority on federal law issues',
                  difference: 'Federal precedent controls when federal law is at issue'
                }
              ],
              policyConsiderations: 'Federalism requires respecting state authority over state law while maintaining federal supremacy on federal issues.',
              practiceAreaApplications: ['Federal Practice', 'Diversity Jurisdiction', 'Constitutional Law'],
              xpGain: 30,
              consequence: 'failure'
            },
            {
              id: 'ca-court-appeal',
              text: 'The California Court of Appeal case from 2021 - it\'s the most recent California authority',
              isCorrect: false,
              explanation: 'While recent and from California, the Court of Appeal is bound by California Supreme Court precedent, which takes priority.',
              detailedExplanation: 'California Courts of Appeal are intermediate appellate courts bound by California Supreme Court decisions. While the 2021 case is more recent, it cannot override binding California Supreme Court precedent. The Court of Appeal case would only be controlling if it addressed an issue not covered by the Supreme Court case.',
              primaryAuthority: {
                type: 'case',
                citation: 'Auto Equity Sales, Inc. v. Superior Court',
                bluebookCitation: 'Auto Equity Sales, Inc. v. Superior Court, 57 Cal.2d 450 (1962)',
                url: 'https://www.law.cornell.edu/wex/precedent',
                summary: 'Established hierarchy of California courts with Supreme Court at the top.',
                jurisdiction: 'California Supreme Court',
                year: 1962
              },
              opposingArgument: 'More recent cases may reflect evolving legal standards and current judicial thinking.',
              policyConsiderations: 'Court hierarchy ensures consistency while allowing for legal evolution through proper channels.',
              practiceAreaApplications: ['State Court Practice', 'Appellate Strategy'],
              xpGain: 40,
              consequence: 'neutral'
            },
            {
              id: 'ny-court-appeals',
              text: 'The New York Court of Appeals case from 2019 - New York has influential commercial law precedents',
              isCorrect: false,
              explanation: 'Out-of-state cases, even from respected jurisdictions, are only persuasive authority and don\'t bind California courts.',
              detailedExplanation: 'While New York has influential commercial law, its Court of Appeals decisions are only persuasive authority in California. California courts are bound by California precedent first. Out-of-state cases may be cited for persuasive value when California law is unclear, but they don\'t override binding California precedent.',
              primaryAuthority: {
                type: 'case',
                citation: 'Restatement (Second) of Conflict of Laws § 6',
                bluebookCitation: 'Restatement (Second) of Conflict of Laws § 6 (1971)',
                url: 'https://www.law.cornell.edu/wex/conflict_of_laws',
                summary: 'Explains principles governing when courts look to other jurisdictions\' law.',
                jurisdiction: 'American Law Institute',
                year: 1971
              },
              opposingArgument: 'Influential jurisdictions like New York often provide persuasive reasoning that courts find compelling.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'Choice of Law Cases',
                  rule: 'Courts may apply other states\' law when required by choice of law analysis',
                  difference: 'Different rules apply when other state\'s law governs the dispute'
                }
              ],
              policyConsiderations: 'Federalism and state sovereignty require respecting each state\'s authority over its own law.',
              practiceAreaApplications: ['Multi-State Practice', 'Conflict of Laws', 'Commercial Law'],
              xpGain: 25,
              consequence: 'failure'
            },
            {
              id: 'most-recent',
              text: 'The most recent case regardless of court - legal precedent evolves and newer cases reflect current thinking',
              isCorrect: false,
              explanation: 'Recency alone doesn\'t determine precedential weight. Court hierarchy and binding vs. persuasive authority are more important factors.',
              detailedExplanation: 'The hierarchy of courts determines precedential weight, not just recency. A newer case from a lower court or different jurisdiction cannot override binding precedent from a higher court in the same jurisdiction. Legal evolution occurs through higher court decisions or legislative changes, not simply through newer cases.',
              primaryAuthority: {
                type: 'case',
                citation: 'Marbury v. Madison',
                bluebookCitation: 'Marbury v. Madison, 5 U.S. (1 Cranch) 137 (1803)',
                url: 'https://www.law.cornell.edu/supremecourt/text/5/137',
                summary: 'Established fundamental principles of precedent and judicial authority that remain controlling today.',
                jurisdiction: 'U.S. Supreme Court',
                year: 1803
              },
              opposingArgument: 'Legal thinking does evolve, and courts sometimes distinguish or limit older precedents.',
              policyConsiderations: 'Legal stability requires respecting established precedent while allowing for appropriate evolution.',
              practiceAreaApplications: ['Legal Research', 'Precedent Analysis'],
              xpGain: 20,
              consequence: 'failure'
            }
          ]
        },
        {
          id: 'analogical-reasoning',
          title: 'The Art of Legal Analogy',
          scenario: 'You\'re arguing that a software licensing agreement should be governed by contract law rather than property law. You find a precedent case involving book publishing rights that held publishing contracts are governed by contract law, not property law, because they involve ongoing relationships and performance obligations.',
          question: 'How should you use this precedent in your argument?',
          skillFocus: 'research',
          backgroundContext: 'Analogical reasoning is the heart of legal argument, requiring lawyers to identify relevant similarities and distinguish irrelevant differences between cases.',
          practicalImportance: 'Effective analogical reasoning is essential for persuasive legal writing and oral argument. It\'s how lawyers apply existing law to new situations.',
          choices: [
            {
              id: 'analogize-similarities',
              text: 'Analogize by emphasizing the similarities: both involve intellectual property licensing, ongoing performance obligations, and complex contractual relationships rather than simple property transfers',
              isCorrect: true,
              explanation: 'Correct! This identifies the legally relevant similarities between the cases while focusing on the underlying legal principles rather than surface differences.',
              detailedExplanation: 'Effective legal analogy focuses on legally relevant similarities rather than superficial differences. Both software licensing and book publishing involve: (1) intellectual property rights, (2) ongoing performance obligations, (3) complex contractual relationships, and (4) licensing rather than outright transfer. These similarities support applying the same legal framework.',
              primaryAuthority: {
                type: 'case',
                citation: 'Restatement (Second) of Contracts § 1',
                bluebookCitation: 'Restatement (Second) of Contracts § 1 (1981)',
                url: 'https://www.law.cornell.edu/wex/contract',
                summary: 'Defines contracts as promises or sets of promises for which the law gives a remedy.',
                jurisdiction: 'American Law Institute',
                year: 1981
              },
              relatedAuthorities: [
                {
                  type: 'case',
                  citation: 'ProCD, Inc. v. Zeidenberg',
                  bluebookCitation: 'ProCD, Inc. v. Zeidenberg, 86 F.3d 1447 (7th Cir. 1996)',
                  url: 'https://www.law.cornell.edu/wex/software_licensing',
                  summary: 'Applied contract law principles to software licensing agreements.',
                  jurisdiction: '7th Circuit',
                  year: 1996
                }
              ],
              opposingArgument: 'Opponents might argue that software and books are fundamentally different types of intellectual property with different legal traditions.',
              jurisdictionalVariations: [
                {
                  jurisdiction: 'California',
                  rule: 'Generally applies contract law to software licenses',
                  difference: 'Consistent with analogical approach'
                },
                {
                  jurisdiction: 'Some Federal Circuits',
                  rule: 'May apply property law concepts to certain software transactions',
                  difference: 'Varying approaches to software licensing characterization'
                }
              ],
              policyConsiderations: 'Consistent application of contract law to licensing relationships promotes predictability and reflects the commercial reality of these transactions.',
              practiceAreaApplications: ['Intellectual Property', 'Software Law', 'Contract Law', 'Technology Transactions'],
              relatedConcepts: [
                {
                  name: 'Licensing vs. Sale',
                  description: 'Legal distinction between transferring limited rights versus full ownership',
                  relationship: 'Central to determining applicable legal framework'
                },
                {
                  name: 'Intellectual Property Rights',
                  description: 'Legal rights in intangible creations',
                  relationship: 'Common element linking software and publishing cases'
                }
              ],
              xpGain: 90,
              skillBonus: 'research',
              consequence: 'success'
            },
            {
              id: 'distinguish-technology',
              text: 'Distinguish the cases because software is fundamentally different from books due to its technological nature and different legal treatment',
              isCorrect: false,
              explanation: 'This focuses on surface differences rather than legally relevant similarities. The technological difference doesn\'t necessarily change the underlying legal principles.',
              detailedExplanation: 'While software and books are technologically different, this distinction may not be legally relevant for determining whether contract or property law applies. The focus should be on legally significant similarities (licensing relationships, performance obligations) rather than technological differences.',
              primaryAuthority: {
                type: 'case',
                citation: 'Restatement (Second) of Contracts § 1',
                bluebookCitation: 'Restatement (Second) of Contracts § 1 (1981)',
                url: 'https://www.law.cornell.edu/wex/contract',
                summary: 'Contract law principles apply regardless of the subject matter when contractual relationships exist.',
                jurisdiction: 'American Law Institute',
                year: 1981
              },
              opposingArgument: 'Software\'s unique characteristics might justify different legal treatment than traditional publishing.',
              policyConsiderations: 'Focusing on technological differences rather than legal principles could lead to inconsistent application of law.',
              practiceAreaApplications: ['Legal Analysis', 'Precedent Distinction'],
              xpGain: 30,
              consequence: 'failure'
            },
            {
              id: 'argue-both-property',
              text: 'Argue that both software and book publishing should be governed by property law because they involve valuable intellectual property rights',
              isCorrect: false,
              explanation: 'This misses the point of the precedent case, which specifically held that publishing contracts are governed by contract law despite involving intellectual property.',
              detailedExplanation: 'The precedent case already determined that intellectual property licensing relationships are governed by contract law rather than property law. Arguing for property law treatment contradicts the precedent you\'re trying to use and ignores the reasoning about ongoing relationships and performance obligations.',
              primaryAuthority: {
                type: 'case',
                citation: 'Random House, Inc. v. Rosetta Books LLC',
                bluebookCitation: 'Random House, Inc. v. Rosetta Books LLC, 150 F. Supp. 2d 613 (S.D.N.Y. 2001)',
                url: 'https://www.law.cornell.edu/wex/publishing_law',
                summary: 'Applied contract interpretation principles to publishing agreements involving intellectual property rights.',
                jurisdiction: 'S.D.N.Y.',
                year: 2001
              },
              opposingArgument: 'No reasonable argument exists for contradicting the precedent you\'re citing.',
              policyConsiderations: 'Consistent legal framework for licensing relationships promotes commercial certainty.',
              practiceAreaApplications: ['Legal Research', 'Precedent Analysis'],
              xpGain: 20,
              consequence: 'failure'
            },
            {
              id: 'narrow-precedent',
              text: 'Argue the precedent applies only to traditional publishing and cannot be extended to modern technology',
              isCorrect: false,
              explanation: 'This artificially narrows the precedent and ignores the underlying legal principles that could apply more broadly.',
              detailedExplanation: 'Legal precedents establish principles that can apply beyond their specific factual contexts. Artificially limiting the precedent to "traditional publishing" ignores the broader principle about licensing relationships and performance obligations that could apply to software licensing.',
              primaryAuthority: {
                type: 'case',
                citation: 'Marbury v. Madison',
                bluebookCitation: 'Marbury v. Madison, 5 U.S. (1 Cranch) 137 (1803)',
                url: 'https://www.law.cornell.edu/supremecourt/text/5/137',
                summary: 'Established that legal principles from precedent cases apply to analogous situations.',
                jurisdiction: 'U.S. Supreme Court',
                year: 1803
              },
              opposingArgument: 'Some might argue that technological advances require new legal frameworks.',
              policyConsiderations: 'Overly narrow interpretation of precedent could make law unable to adapt to new situations.',
              practiceAreaApplications: ['Precedent Analysis', 'Legal Evolution'],
              xpGain: 35,
              consequence: 'neutral'
            },
            {
              id: 'ignore-precedent',
              text: 'Ignore the publishing precedent and argue based on first principles that software licensing should be governed by contract law',
              isCorrect: false,
              explanation: 'This wastes a valuable precedent that supports your position. Using analogous precedent strengthens legal arguments.',
              detailedExplanation: 'When you have precedent that supports your position, you should use it rather than ignore it. Analogous precedent provides authority for your argument and demonstrates that courts have already considered similar issues. First principles arguments are weaker than precedent-based arguments.',
              primaryAuthority: {
                type: 'case',
                citation: 'Restatement (Second) of Contracts § 1',
                bluebookCitation: 'Restatement (Second) of Contracts § 1 (1981)',
                url: 'https://www.law.cornell.edu/wex/contract',
                summary: 'While first principles are important, precedent provides stronger authority for legal arguments.',
                jurisdiction: 'American Law Institute',
                year: 1981
              },
              opposingArgument: 'First principles arguments can be powerful when precedent is weak or distinguishable.',
              policyConsiderations: 'Legal system relies on precedent for consistency and predictability.',
              practiceAreaApplications: ['Legal Argument', 'Brief Writing'],
              xpGain: 25,
              consequence: 'failure'
            }
          ]
        }
      ]
    }
  ]
};