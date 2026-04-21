const productDetails = {
  '5-amino-1mq': {
    overview: 'A small molecule inhibitor of NNMT (nicotinamide N-methyltransferase), an enzyme overexpressed in fat tissue. By blocking NNMT, 5-Amino-1MQ raises NAD+ levels in fat cells, shifting them toward burning energy rather than storing it.',
    howItWorks: [
      { title: 'NNMT Inhibition', body: 'Blocks the enzyme that converts NAD+ precursors into inactive metabolites, raising cellular NAD+ and activating SIRT1 longevity pathways.' },
      { title: 'Fat Cell Shrinkage', body: 'Reduces the size of fat cells by promoting lipolysis and inhibiting fat storage signals within adipose tissue.' },
      { title: 'Metabolic Rate Boost', body: 'Increases resting metabolic rate without stimulant effects, making it useful for long-term weight management research.' },
      { title: 'Capsule Form', body: 'Unlike most peptides, 5-Amino-1MQ is orally bioavailable, making administration straightforward with no reconstitution required.' },
    ],
    whyChoose: [
      'Oral capsule — no injection required',
      'Targets fat metabolism at the cellular level',
      'Raises NAD+ without IV administration',
      'Non-stimulant mechanism — no jitters or crash',
      'Useful for long-term metabolic research protocols',
    ],
  },

  'adipotide': {
    overview: 'A peptidomimetic compound that selectively targets and destroys the blood supply feeding white adipose tissue. Originally developed as a cancer drug, it was found to cause rapid, significant fat loss in animal models.',
    howItWorks: [
      { title: 'Vascular Targeting', body: 'Binds to prohibitin on the surface of blood vessels feeding white fat tissue, delivering a cell-death signal specifically to those vessels.' },
      { title: 'Fat Cell Apoptosis', body: 'Cutting off blood supply triggers programmed cell death in the targeted fat cells, leading to significant reduction in fat mass.' },
      { title: 'Selective Action', body: 'Does not affect blood vessels in other tissues, making the fat-reduction effect highly targeted compared to systemic weight loss agents.' },
    ],
    whyChoose: [
      'Rapid, targeted fat reduction in research models',
      'Novel mechanism distinct from GLP-1 or stimulant-based compounds',
      'Well-studied in primate models with significant fat loss results',
      'May complement other weight management peptides',
    ],
  },

  'aod-9604': {
    overview: 'A modified fragment of human growth hormone (hGH 176-191) that retains the fat-burning properties of GH without affecting insulin levels or promoting muscle growth. Developed in Australia and studied in human clinical trials for obesity.',
    howItWorks: [
      { title: 'Beta-3 Adrenergic Stimulation', body: 'Stimulates beta-3 adrenergic receptors in fat tissue, triggering lipolysis and the release of stored fatty acids for energy.' },
      { title: 'No IGF-1 Effect', body: 'Unlike full GH, AOD-9604 does not stimulate IGF-1 production, meaning no muscle growth, no insulin resistance, and no unwanted GH side effects.' },
      { title: 'Fat Oxidation', body: 'Increases the rate at which fat is burned for fuel, particularly targeting stubborn subcutaneous and visceral fat depots.' },
    ],
    whyChoose: [
      'Human clinical trial data available',
      'No effect on blood sugar or insulin sensitivity',
      'Isolated fat-loss mechanism from GH without anabolic effects',
      'Well-tolerated with a strong safety profile',
      'Available in two vial sizes for flexible dosing',
    ],
  },

  'cagrilintide': {
    overview: 'A long-acting amylin analog that reduces appetite and food intake through central nervous system satiety signals. Often studied in combination with semaglutide for synergistic weight loss effects.',
    howItWorks: [
      { title: 'Amylin Receptor Activation', body: 'Mimics amylin, a hormone co-secreted with insulin that signals fullness to the brain, slowing gastric emptying and reducing meal size.' },
      { title: 'Extended Half-Life', body: 'Structural modifications allow once-weekly dosing, unlike native amylin which degrades rapidly.' },
      { title: 'Complementary to GLP-1', body: 'Works through different receptors than GLP-1 agonists, making the combination of cagrilintide + semaglutide produce additive weight loss in studies.' },
    ],
    whyChoose: [
      'Once-weekly dosing convenience',
      'Synergistic with GLP-1 agonists like semaglutide or tirzepatide',
      'Reduces appetite through a different pathway than GLP-1 analogs',
      'Strong clinical development data from Novo Nordisk trials',
    ],
  },

  'lc-216': {
    overview: 'A peptide-based PCSK9 inhibitor studied for its ability to lower LDL cholesterol and improve metabolic markers. PCSK9 is a protein that degrades LDL receptors in the liver; blocking it allows the liver to clear more LDL from the bloodstream.',
    howItWorks: [
      { title: 'PCSK9 Inhibition', body: 'Binds to and neutralizes PCSK9, preventing it from degrading LDL receptors on liver cells and allowing more LDL cholesterol to be cleared from circulation.' },
      { title: 'LDL Reduction', body: 'By increasing available LDL receptors, the liver removes significantly more LDL from the bloodstream, reducing cardiovascular risk markers.' },
      { title: 'Metabolic Improvement', body: 'Studies show downstream improvements in metabolic health markers beyond cholesterol, including inflammation and triglyceride levels.' },
    ],
    whyChoose: [
      'Peptide alternative to monoclonal antibody PCSK9 inhibitors',
      'Potentially more affordable than biologic PCSK9 treatments',
      'Addresses LDL at the receptor regulation level',
      'Useful for cardiovascular metabolic research protocols',
    ],
  },

  'retatrutide': {
    overview: 'A triple receptor agonist targeting GIP, GLP-1, and glucagon receptors simultaneously. Studied as a next-generation weight loss compound, showing some of the highest percentage weight loss in clinical trials of any peptide to date.',
    howItWorks: [
      { title: 'Triple Receptor Action', body: 'Activates GIP receptors (insulin/fat metabolism), GLP-1 receptors (appetite/glucose), and glucagon receptors (energy expenditure) simultaneously for compounded metabolic effects.' },
      { title: 'Superior Weight Loss', body: 'Clinical trials show up to 24% body weight reduction, exceeding tirzepatide and semaglutide in head-to-head comparisons.' },
      { title: 'Glucagon Component', body: 'The added glucagon receptor activity increases energy expenditure beyond what GLP-1/GIP alone achieve, targeting both intake and output.' },
    ],
    whyChoose: [
      'Highest weight loss results of any peptide in clinical development',
      'Triple mechanism addresses multiple metabolic pathways',
      'Strong clinical trial pipeline data',
      'Next-generation beyond semaglutide and tirzepatide',
    ],
  },

  'tesamorelin': {
    overview: 'A synthetic GHRH analog approved by the FDA for HIV-associated lipodystrophy. Specifically targets visceral (abdominal) fat while preserving lean muscle mass, making it unique among weight management peptides.',
    howItWorks: [
      { title: 'GHRH Mimicry', body: 'Stimulates the pituitary to release growth hormone in a pulsatile, physiologically normal pattern, avoiding the side effects of direct GH administration.' },
      { title: 'Visceral Fat Targeting', body: 'GH released by tesamorelin preferentially mobilizes visceral abdominal fat — the metabolically dangerous fat surrounding organs.' },
      { title: 'Lean Mass Preservation', body: 'Unlike caloric restriction, tesamorelin reduces fat while preserving or increasing lean muscle mass through IGF-1 elevation.' },
    ],
    whyChoose: [
      'FDA-approved compound with extensive clinical data',
      'Specifically targets visceral fat, not just subcutaneous',
      'Preserves lean muscle while reducing fat',
      'Pulsatile GH release avoids continuous elevation side effects',
      'Available in two sizes for protocol flexibility',
    ],
  },

  'tirzepatide': {
    overview: 'A dual GIP and GLP-1 receptor agonist (the active ingredient in Mounjaro and Zepbound). One of the most clinically validated weight loss compounds available, with up to 22% body weight reduction in trials.',
    howItWorks: [
      { title: 'Dual Receptor Agonism', body: 'Simultaneously activates GIP receptors (enhancing insulin sensitivity and fat metabolism) and GLP-1 receptors (reducing appetite and slowing gastric emptying).' },
      { title: 'Appetite Suppression', body: 'GLP-1 signaling reduces hunger hormones and increases satiety signals, leading to significantly reduced caloric intake.' },
      { title: 'Insulin Sensitization', body: 'GIP activation improves how efficiently the body uses insulin, improving metabolic health beyond just weight loss.' },
    ],
    whyChoose: [
      'Clinically proven up to 22% body weight reduction',
      'Dual mechanism outperforms GLP-1-only compounds',
      'Improves blood sugar and metabolic markers alongside weight',
      'Extensive phase 3 trial safety data',
      'Available in two sizes for different protocol stages',
    ],
  },

  'bpc-157': {
    overview: 'Body Protection Compound-157 is a 15-amino acid peptide derived from a protective gastric protein. One of the most studied healing peptides, with remarkable regenerative effects on muscle, tendon, ligament, bone, and gut tissue.',
    howItWorks: [
      { title: 'Angiogenesis', body: 'Strongly upregulates VEGF (vascular endothelial growth factor), triggering the formation of new blood vessels into damaged tissue to deliver nutrients and accelerate healing.' },
      { title: 'Tendon & Ligament Repair', body: 'Dramatically accelerates healing of connective tissue injuries — some of the fastest-healing tissues observed in BPC-157 research.' },
      { title: 'Gut Protection', body: 'Originally discovered as a gastric compound, BPC-157 repairs intestinal lining, reduces inflammation, and may help conditions like leaky gut and IBD.' },
      { title: 'Systemic Effect', body: 'Whether injected locally or subcutaneously, BPC-157 exerts systemic healing effects throughout the body.' },
    ],
    whyChoose: [
      'One of the most extensively researched healing peptides',
      'Effective for muscle, tendon, ligament, bone, and gut',
      'Both local and systemic administration routes studied',
      'No serious adverse effects reported across extensive research',
      'Available in two sizes for short or extended protocols',
    ],
  },

  'tb-500': {
    overview: 'A synthetic version of Thymosin Beta-4, a naturally occurring protein that plays a central role in tissue repair and regeneration. Particularly effective for systemic healing and reducing scar tissue formation.',
    howItWorks: [
      { title: 'Actin Regulation', body: 'Binds to actin, a protein essential for cell structure and migration. This promotes the movement of cells into injured areas to begin repair.' },
      { title: 'Systemic Distribution', body: 'TB-500 travels throughout the body via blood, reaching distant injury sites — making it effective even when injected away from the injury.' },
      { title: 'Scar Reduction', body: 'Modulates the inflammatory and fibrotic response in a way that promotes cleaner healing with less scar tissue formation than untreated injuries.' },
      { title: 'Anti-Inflammatory', body: 'Reduces pro-inflammatory cytokines at injury sites, decreasing pain and swelling while enabling the regenerative phase of healing.' },
    ],
    whyChoose: [
      'Systemic healing reach — works throughout the body from one injection',
      'Reduces scar tissue compared to natural healing',
      'Complements BPC-157 through different healing pathways',
      'Strong safety data from extensive research',
      'Available in two sizes',
    ],
  },

  'wolverine': {
    overview: 'A pre-combined vial of BPC-157 and TB-500 — the two most popular healing peptides — formulated together for convenience. These peptides work through complementary pathways and are commonly stacked in recovery research.',
    howItWorks: [
      { title: 'BPC-157 Component', body: 'Drives angiogenesis and local tissue repair through VEGF upregulation — particularly effective for tendons, ligaments, and gut tissue.' },
      { title: 'TB-500 Component', body: 'Provides systemic healing via actin regulation, reduces scar formation, and reaches injury sites throughout the body.' },
      { title: 'Synergistic Action', body: 'BPC-157 works locally and TB-500 works systemically, giving a combined protocol broader healing coverage than either alone.' },
    ],
    whyChoose: [
      'Combines two proven healing peptides in one vial',
      'Eliminates the need to source and mix separately',
      'Complementary mechanisms provide broader healing coverage',
      'Convenient for travel or simplified protocols',
      'Cost-effective compared to buying BPC-157 and TB-500 separately',
    ],
  },

  'epithalon': {
    overview: 'A tetrapeptide derived from the pineal gland that activates telomerase — the enzyme that lengthens telomeres. One of the most studied anti-aging peptides, with Russian clinical data spanning several decades.',
    howItWorks: [
      { title: 'Telomerase Activation', body: 'Stimulates the enzyme telomerase to rebuild telomere length, addressing one of the core biological mechanisms of cellular aging.' },
      { title: 'Pineal Regulation', body: 'Restores melatonin and cortisol secretion patterns that decline with age, improving sleep architecture and circadian rhythm.' },
      { title: 'Antioxidant Effects', body: 'Reduces oxidative stress markers and lipid peroxidation, protecting cells from damage that accumulates with age.' },
      { title: 'Gene Expression', body: 'Modulates expression of genes involved in cell cycle regulation, potentially reducing the accumulation of senescent cells.' },
    ],
    whyChoose: [
      'Decades of Russian clinical research behind it',
      'Directly targets telomere shortening — a root cause of aging',
      'Improves sleep quality alongside anti-aging effects',
      'Available in two sizes including a large 50mg research vial',
      'Non-toxic and well-tolerated in long-term studies',
    ],
  },

  'fox04': {
    overview: 'A modified D-amino acid peptide that selectively induces apoptosis (programmed cell death) in senescent cells — the dysfunctional "zombie cells" that accumulate with age and drive inflammation and tissue decline.',
    howItWorks: [
      { title: 'Senolytic Action', body: 'Disrupts the interaction between FOX04 and p53 proteins inside senescent cells, removing the survival signal that keeps zombie cells alive.' },
      { title: 'Selective Targeting', body: 'Only triggers apoptosis in senescent cells — healthy cells are unaffected because they do not rely on the same FOX04-p53 survival mechanism.' },
      { title: 'Inflammation Reduction', body: 'Senescent cells secrete a toxic cocktail of inflammatory signals (SASP). Clearing them dramatically reduces local and systemic inflammation.' },
      { title: 'Tissue Rejuvenation', body: 'Removing senescent cells creates space for healthy cell proliferation, supporting tissue renewal in aging organs.' },
    ],
    whyChoose: [
      'One of the only true senolytics available as a research peptide',
      'Targets zombie cells without harming healthy tissue',
      'Addresses a fundamental driver of age-related decline',
      'Backed by landmark Nature Medicine research',
      'Unique mechanism not replicated by other anti-aging peptides',
    ],
  },

  'glutathione': {
    overview: 'The body\'s master antioxidant, a tripeptide produced in every cell. Glutathione neutralizes free radicals, supports liver detoxification, and plays a central role in immune function and cellular health.',
    howItWorks: [
      { title: 'Free Radical Neutralization', body: 'Directly donates electrons to neutralize reactive oxygen species (ROS) that damage DNA, proteins, and cell membranes.' },
      { title: 'Liver Detoxification', body: 'Conjugates with toxins, heavy metals, and drug metabolites in the liver, enabling safe elimination from the body.' },
      { title: 'Immune Support', body: 'Required for proper T-cell function and proliferation — glutathione-depleted immune cells cannot mount effective responses.' },
      { title: 'Recycling Network', body: 'Regenerates other antioxidants including vitamin C and E, amplifying overall antioxidant capacity beyond its own direct effects.' },
    ],
    whyChoose: [
      'The body\'s own primary antioxidant system',
      'Declines significantly with age and oxidative stress',
      'Supports liver, immune, and cellular health simultaneously',
      'Injectable form bypasses oral bioavailability limitations',
      'Well-tolerated with decades of clinical use',
    ],
  },

  'kisspeptin': {
    overview: 'A naturally occurring neuropeptide that acts as the master regulator of the HPG (hypothalamic-pituitary-gonadal) axis, controlling testosterone, estrogen, and LH release. Critical for reproductive health and hormonal balance.',
    howItWorks: [
      { title: 'GnRH Stimulation', body: 'Binds to kisspeptin receptors in the hypothalamus, triggering a surge in GnRH (gonadotropin-releasing hormone) release.' },
      { title: 'LH and FSH Pulses', body: 'GnRH stimulates the pituitary to release LH and FSH, which in turn signal the gonads to produce testosterone or estrogen.' },
      { title: 'Libido Enhancement', body: 'Works centrally in the brain to enhance sexual motivation and drive, independent of peripheral hormone levels.' },
      { title: 'Fertility Support', body: 'Restores the hormonal signaling cascade needed for ovulation and sperm production, studied for both male and female fertility.' },
    ],
    whyChoose: [
      'Works at the top of the hormonal cascade for comprehensive effect',
      'Studied for both libido and fertility applications',
      'Natural signaling molecule, not a synthetic hormone',
      'Useful for research into HPG axis dysfunction',
      'Produces LH/FSH without directly supplying exogenous hormones',
    ],
  },

  'melanotan-2': {
    overview: 'A synthetic analog of alpha-MSH that activates multiple melanocortin receptors, producing tanning (MC1R), sexual arousal (MC4R), and appetite suppression (MC3R/MC4R). One of the most multi-functional research peptides available.',
    howItWorks: [
      { title: 'Melanin Production', body: 'Activates MC1R on melanocytes to increase melanin synthesis, producing a tan without UV exposure required for initial pigmentation.' },
      { title: 'Sexual Function', body: 'MC4R activation in the brain drives spontaneous arousal, erection, and libido in both male and female research models.' },
      { title: 'Appetite Suppression', body: 'MC3R and MC4R activation reduces hunger signals, contributing to weight management effects seen in research.' },
    ],
    whyChoose: [
      'Multi-receptor action provides tanning, libido, and appetite effects',
      'Well-studied across decades of research',
      'Faster pigmentation than Melanotan 1 with additional sexual health benefits',
      'One of the most requested research peptides globally',
    ],
  },

  'oxytocin': {
    overview: 'The natural "bonding hormone" produced by the hypothalamus and released by the pituitary. Studied for its role in trust, social bonding, anxiety reduction, sexual function, and anti-inflammatory effects.',
    howItWorks: [
      { title: 'Bonding and Trust', body: 'Activates oxytocin receptors in the limbic system, increasing feelings of trust, connection, and pro-social behavior.' },
      { title: 'Anxiety Reduction', body: 'Reduces activity in the amygdala (fear center), decreasing anxiety responses without sedation or cognitive impairment.' },
      { title: 'Sexual Enhancement', body: 'Promotes pair bonding, arousal, and orgasm intensity through central nervous system oxytocin receptor activation.' },
      { title: 'Anti-Inflammatory', body: 'Oxytocin receptors on immune cells modulate cytokine production, contributing to reduced systemic inflammation.' },
    ],
    whyChoose: [
      'Naturally occurring hormone with extensive human research',
      'Multiple administration routes studied (intranasal most common)',
      'Improves both relationship and sexual health parameters',
      'Reduces anxiety without sedation or dependence risk',
      'Well-tolerated with short duration of action',
    ],
  },

  'pt-141': {
    overview: 'Also known as Bremelanotide, PT-141 is an FDA-approved melanocortin receptor agonist for female sexual dysfunction. Unlike Melanotan 2, it works centrally on the brain rather than peripherally, making it specifically targeted for sexual arousal.',
    howItWorks: [
      { title: 'Central Arousal Mechanism', body: 'Activates MC4R receptors in the hypothalamus and limbic system, directly triggering the brain\'s sexual arousal pathway.' },
      { title: 'No Vascular Dependence', body: 'Works independently of blood flow or hormonal levels, making it effective when other approaches fail due to vascular or hormonal issues.' },
      { title: 'Rapid Onset', body: 'Effects typically begin within 45-90 minutes of subcutaneous or intranasal administration.' },
    ],
    whyChoose: [
      'FDA-approved for hypoactive sexual desire disorder (HSDD) in women',
      'Works in both men and women through a central mechanism',
      'Effective regardless of hormonal or vascular status',
      'Rapid onset with predictable dosing',
      'Extensive clinical trial safety and efficacy data',
    ],
  },

  'dsip': {
    overview: 'Delta Sleep-Inducing Peptide — a naturally occurring neuropeptide that promotes deep delta-wave sleep, reduces stress hormones, and has analgesic and anti-oxidant properties. One of the few peptides specifically designed around sleep quality.',
    howItWorks: [
      { title: 'Delta Wave Induction', body: 'Promotes slow-wave (delta) sleep — the deepest, most restorative sleep stage critical for physical recovery and memory consolidation.' },
      { title: 'Cortisol Reduction', body: 'Suppresses ACTH and cortisol secretion, reducing the stress hormone load that interferes with sleep onset and quality.' },
      { title: 'LH Regulation', body: 'Modulates luteinizing hormone pulsatility, supporting hormonal balance alongside sleep improvement.' },
      { title: 'Antioxidant Effects', body: 'Has antioxidant properties that protect against oxidative stress, providing systemic benefits beyond sleep induction.' },
    ],
    whyChoose: [
      'Specifically targets deep sleep quality, not just sleep onset',
      'Reduces cortisol — a major driver of poor sleep',
      'Non-sedating mechanism — no next-day grogginess',
      'Addresses both the neurological and hormonal components of sleep',
      'Available in two sizes',
    ],
  },

  'cerebrolysin': {
    overview: 'A peptide mixture derived from porcine brain proteins, containing neurotrophic factors including BDNF, NGF, and CNTF. Approved in multiple countries for cognitive impairment, stroke recovery, and traumatic brain injury.',
    howItWorks: [
      { title: 'Neurotrophic Factor Delivery', body: 'Provides BDNF, NGF, and other growth factors that support neuron survival, synaptic plasticity, and neurogenesis.' },
      { title: 'Neuroprotection', body: 'Protects neurons from excitotoxicity, oxidative stress, and ischemic damage — particularly studied in stroke and TBI models.' },
      { title: 'Neurogenesis Support', body: 'Promotes the growth of new neurons and synaptic connections, supporting recovery from neurological injury and cognitive decline.' },
    ],
    whyChoose: [
      'Approved in over 40 countries for neurological conditions',
      'Contains actual neurotrophic factors, not just precursors',
      'Decades of clinical use and safety data',
      'Studied for stroke, TBI, Alzheimer\'s, and ADHD',
      'One of the most powerful neuroprotective compounds available',
    ],
  },

  'selank': {
    overview: 'A synthetic heptapeptide derived from tuftsin, approved in Russia as an anxiolytic medication. Selank reduces anxiety and stress while simultaneously improving cognitive function — a rare combination not seen with traditional anti-anxiety drugs.',
    howItWorks: [
      { title: 'Neurotransmitter Modulation', body: 'Increases dopamine, serotonin, and GABA activity while reducing excessive norepinephrine, balancing the neurotransmitter profile associated with anxiety.' },
      { title: 'BDNF Upregulation', body: 'Raises brain-derived neurotrophic factor levels, improving neuroplasticity, memory, and cognitive performance.' },
      { title: 'Enkephalin Stabilization', body: 'Inhibits enzymes that break down enkephalins (natural opioid-like peptides), prolonging their mood-stabilizing effects.' },
      { title: 'Non-Sedating', body: 'Reduces anxiety while maintaining alertness and cognitive function — unlike benzodiazepines which impair both.' },
    ],
    whyChoose: [
      'Reduces anxiety without sedation or cognitive impairment',
      'No dependence or withdrawal — unlike benzodiazepines',
      'Approved medication in Russia with extensive clinical use',
      'Improves memory and learning alongside anxiety reduction',
      'Available in two sizes',
    ],
  },

  'semax': {
    overview: 'A synthetic heptapeptide derived from ACTH with potent nootropic, neuroprotective, and neurogenic effects. Approved in Russia for cognitive enhancement and stroke recovery, Semax dramatically raises BDNF and NGF levels.',
    howItWorks: [
      { title: 'BDNF Elevation', body: 'Dramatically increases brain-derived neurotrophic factor — the key protein for neuroplasticity, memory formation, and neuron survival.' },
      { title: 'Dopamine and Serotonin', body: 'Increases dopamine and serotonin metabolism, improving mood, motivation, and focus without stimulant effects.' },
      { title: 'Neuroprotection', body: 'Protects neurons from hypoxia, oxidative stress, and excitotoxicity — valuable in stroke and traumatic brain injury research.' },
      { title: 'Attention Enhancement', body: 'Specifically enhances the brain\'s attention networks, improving focus and mental clarity within 15-30 minutes of intranasal administration.' },
    ],
    whyChoose: [
      'One of the most potent nootropic peptides available',
      'Approved in Russia for stroke recovery — real clinical data',
      'Non-stimulant: enhances cognition without jitters or crash',
      'Rapid onset via intranasal route',
      'Available in two sizes',
    ],
  },

  'll-37': {
    overview: 'The only member of the cathelicidin family found in humans, LL-37 is a natural antimicrobial peptide that forms the first line of immune defense. It kills bacteria, viruses, and fungi directly while also recruiting immune cells and promoting wound healing.',
    howItWorks: [
      { title: 'Direct Pathogen Killing', body: 'Disrupts bacterial, viral, and fungal cell membranes through electrostatic interaction, killing pathogens without requiring the adaptive immune system.' },
      { title: 'Biofilm Penetration', body: 'One of the few substances able to penetrate bacterial biofilms — protective matrices that make chronic infections resistant to antibiotics.' },
      { title: 'Immune Cell Recruitment', body: 'Acts as a chemoattractant for neutrophils, monocytes, and T-cells, drawing immune reinforcements to sites of infection.' },
      { title: 'Wound Healing', body: 'Stimulates angiogenesis and cell proliferation, accelerating wound closure and tissue repair alongside its antimicrobial action.' },
    ],
    whyChoose: [
      'Broad-spectrum: effective against bacteria, viruses, and fungi',
      'Penetrates bacterial biofilms that antibiotics cannot reach',
      'Natural human defense molecule — the body\'s own antimicrobial',
      'Promotes wound healing alongside infection control',
      'Promising alternative as antibiotic resistance grows',
    ],
  },

  'thymosin-alpha-1': {
    overview: 'A 28-amino acid peptide originally isolated from the thymus gland, approved in over 35 countries for hepatitis B and C treatment. Thymosin Alpha-1 enhances multiple aspects of immune function including T-cell maturation, NK cell activity, and antiviral cytokine production.',
    howItWorks: [
      { title: 'T-Cell Maturation', body: 'Promotes differentiation and maturation of T-cells in the thymus — particularly important as thymus function naturally declines with age.' },
      { title: 'Th1 Response Enhancement', body: 'Shifts immune response toward cell-mediated (Th1) immunity, improving the body\'s ability to fight intracellular pathogens and support anti-tumor responses.' },
      { title: 'Cytokine Optimization', body: 'Increases IL-2 and IFN-gamma production while modulating inflammatory cytokines, balancing immune activation.' },
      { title: 'Immunosenescence Reversal', body: 'May reverse age-related immune decline by supporting thymic function and T-cell production in older research subjects.' },
    ],
    whyChoose: [
      'Approved in 35+ countries with decades of clinical safety data',
      'Enhances multiple arms of immune function simultaneously',
      'Particularly effective for viral infections including hepatitis',
      'May enhance vaccine responses in older or immunocompromised subjects',
      'Remarkably safe profile even with long-term use',
    ],
  },

  'vip': {
    overview: 'Vasoactive Intestinal Peptide is a naturally occurring neuropeptide with profound anti-inflammatory, immune-modulating, and neuroprotective properties. The cornerstone peptide for treating Chronic Inflammatory Response Syndrome (CIRS) and mold illness.',
    howItWorks: [
      { title: 'Immune Regulation', body: 'Shifts immune response from inflammatory Th17 toward regulatory T-cells (Tregs), restoring immune balance in conditions involving chronic dysregulation.' },
      { title: 'Cytokine Modulation', body: 'Reduces TNF-alpha, IL-6, and TGF-beta while promoting anti-inflammatory mediators — directly addressing the cytokine storms seen in CIRS.' },
      { title: 'Mast Cell Stabilization', body: 'Prevents excessive mast cell degranulation, reducing histamine and inflammatory mediator release — critical in mast cell activation syndrome.' },
      { title: 'Pulmonary Protection', body: 'Bronchodilator and anti-inflammatory in the lungs, protecting against pulmonary inflammation and improving respiratory markers.' },
    ],
    whyChoose: [
      'Primary peptide for CIRS and mold illness protocols',
      'One of the most potent endogenous anti-inflammatory molecules',
      'Addresses mast cell activation alongside broader immune dysregulation',
      'Multi-system effects across nervous, immune, and digestive systems',
      'Works through natural VIP receptors already present in the body',
    ],
  },

  'ghk-cu': {
    overview: 'A naturally occurring copper-peptide complex found in human plasma that declines with age — from ~200 μg/L at age 20 to ~80 μg/L by age 60. GHK-Cu stimulates collagen and elastin production, regulates over 4,000 human genes, and provides potent regenerative effects.',
    howItWorks: [
      { title: 'Collagen Stimulation', body: 'Significantly increases collagen I, II, and III synthesis in fibroblasts, essential for skin firmness, wound healing, and structural tissue repair.' },
      { title: 'Gene Expression Modulation', body: 'Research shows GHK-Cu influences over 4,000 human genes — upregulating healing genes while downregulating inflammation, fibrosis, and cancer-associated genes.' },
      { title: 'Copper Delivery', body: 'The copper component serves as a cofactor for lysyl oxidase, essential for collagen cross-linking, while also supporting SOD antioxidant activity.' },
      { title: 'Stem Cell Activation', body: 'May enhance stem cell proliferation and differentiation, supporting tissue regeneration at the cellular level.' },
    ],
    whyChoose: [
      'Effective both topically for skin and systemically via injection',
      'Naturally occurring — addresses an age-related deficiency',
      'Decades of cosmetic and injectable research',
      'Visible skin improvements typically within 4-8 weeks',
      'One of the most broadly researched anti-aging peptides available',
    ],
  },

  'melanotan-1': {
    overview: 'A synthetic analog of alpha-MSH that selectively targets MC1R to stimulate melanin production. More targeted than Melanotan 2, MT-1 is studied for its photoprotective effects and its ability to produce a gradual, controlled pigmentation response.',
    howItWorks: [
      { title: 'MC1R Activation', body: 'Primarily targets melanocortin-1 receptors on melanocytes, stimulating melanin synthesis without the broader receptor activity of Melanotan 2.' },
      { title: 'Eumelanin Shift', body: 'Promotes darker, more UV-protective eumelanin over lighter pheomelanin, increasing the skin\'s natural photoprotective capacity.' },
      { title: 'Photoprotection', body: 'Increased melanin reduces UV-induced damage markers including erythema and oxidative stress in photobiology research.' },
    ],
    whyChoose: [
      'More targeted than MT-2 — focused on pigmentation pathways',
      'Gradual, controlled pigmentation response',
      'Useful for photobiology and UV-response research',
      'Less systemic receptor activity than Melanotan 2',
    ],
  },

  'snap-8': {
    overview: 'An octapeptide that mimics the N-terminal end of SNAP-25, a protein involved in neuromuscular signaling. By interfering with the SNARE complex, SNAP-8 reduces facial muscle contraction intensity, diminishing expression lines without full paralysis.',
    howItWorks: [
      { title: 'SNARE Complex Interference', body: 'Destabilizes the protein complex responsible for neurotransmitter release at the neuromuscular junction, reducing acetylcholine release and muscle contraction strength.' },
      { title: 'Expression Line Reduction', body: 'Limiting facial muscle contraction depth reduces the formation and deepening of expression lines caused by repeated movements.' },
      { title: 'Non-Paralytic', body: 'Unlike botulinum toxin, SNAP-8 reduces but does not eliminate muscle movement, maintaining more natural facial expressions.' },
    ],
    whyChoose: [
      '30% more effective than Argireline (SNAP-7) in studies',
      'Non-invasive alternative to botulinum toxin injections',
      'Topical application possible — no needles required',
      'Natural facial expression maintained unlike Botox paralysis',
      'Excellent safety profile in cosmetic research',
    ],
  },

  'glow': {
    overview: 'A proprietary multi-peptide blend formulated for comprehensive skin enhancement. Combines collagen-stimulating, antioxidant, and brightening peptides to address radiance, hydration, pigmentation, and skin texture simultaneously.',
    howItWorks: [
      { title: 'Multi-Peptide Synergy', body: 'Combines complementary peptides that target collagen synthesis, melanin regulation, hydration, and cellular turnover for broader effects than single peptides.' },
      { title: 'Collagen Stimulation', body: 'Peptide components signal fibroblasts to increase collagen and elastin, improving skin firmness and reducing fine lines.' },
      { title: 'Antioxidant Protection', body: 'Antioxidant peptide components neutralize free radicals that accelerate skin aging and damage.' },
    ],
    whyChoose: [
      'Comprehensive multi-peptide approach to skin health',
      'Addresses multiple skin concerns in one formulation',
      'Synergistic effects exceed single-peptide alternatives',
      'Contact us for current availability and sizing',
    ],
  },

  'klow': {
    overview: 'A proprietary four-peptide blend combining BPC-157, TB-500, GHK-Cu, and KPV. Each component contributes a distinct healing mechanism — local repair, systemic healing, skin regeneration, and anti-inflammation — creating a comprehensive recovery and anti-aging formulation.',
    howItWorks: [
      { title: 'BPC-157 Component', body: 'Drives angiogenesis and local tissue repair via VEGF upregulation — fast healing of muscles, tendons, ligaments, and gut tissue.' },
      { title: 'TB-500 Component', body: 'Systemic healing via actin regulation, reduced scar formation, and whole-body injury response.' },
      { title: 'GHK-Cu Component', body: 'Collagen and elastin stimulation for skin rejuvenation, hair follicle health, and broad gene expression modulation.' },
      { title: 'KPV Component', body: 'Potent anti-inflammatory action via NF-kB inhibition, gut barrier support, and cytokine reduction.' },
    ],
    whyChoose: [
      'Four proven peptides combined in one convenient vial',
      'Covers local healing, systemic healing, skin, and inflammation simultaneously',
      'Cost-effective versus sourcing all four separately',
      'Versatile for injury recovery, anti-aging, gut health, and general wellness',
    ],
  },

  'kpv': {
    overview: 'A naturally occurring tripeptide (Lys-Pro-Val) derived from alpha-MSH. KPV retains the potent anti-inflammatory activity of its parent hormone in a smaller, more stable molecule — with particular effectiveness in gut inflammation research.',
    howItWorks: [
      { title: 'NF-kB Inhibition', body: 'Blocks the NF-kB signaling pathway, directly reducing production of TNF-alpha, IL-1beta, IL-6, and IL-8 — the key drivers of chronic inflammation.' },
      { title: 'Gut Barrier Protection', body: 'Supports tight junction integrity in the intestinal lining, reducing intestinal permeability and directly reducing inflammation in gut tissue.' },
      { title: 'Multiple Routes', body: 'Effective subcutaneously for systemic effects, orally for gut-targeted action, or topically for wound healing — rare versatility among peptides.' },
      { title: 'Antimicrobial', body: 'Exhibits direct antimicrobial activity, supporting gut health through both immune modulation and pathogen control.' },
    ],
    whyChoose: [
      'Specialist for gut inflammation — one of the few peptides with strong intestinal evidence',
      'Multiple administration routes for targeted or systemic use',
      'Natural fragment of alpha-MSH — not a synthetic construct',
      'Works synergistically alongside BPC-157 and TB-500',
      'Minimal side effects across research applications',
    ],
  },

  'cjc-ipa': {
    overview: 'The gold-standard GH peptide stack — combining CJC-1295 (no DAC), a GHRH analog, with Ipamorelin, a ghrelin mimetic. These two compounds work through different receptors and produce GH pulses 3-10 times larger than either peptide alone.',
    howItWorks: [
      { title: 'Dual-Pathway Synergy', body: 'CJC-1295 activates GHRH receptors while Ipamorelin activates ghrelin receptors — triggering GH release from two different pathways simultaneously.' },
      { title: 'Amplified GH Pulses', body: 'The combined stimulation produces GH pulses 3-10x larger than either peptide alone, while maintaining the natural pulsatile pattern.' },
      { title: 'Clean Hormone Profile', body: 'Ipamorelin does not elevate cortisol or prolactin, keeping GH stimulation clean and free of stress hormone side effects.' },
      { title: 'Flexible Timing', body: 'Short half-life allows strategic 1-3x daily dosing — at bedtime for recovery, post-workout for growth, or both.' },
    ],
    whyChoose: [
      'Most widely used and researched GH peptide combination',
      'Synergistic — produces far greater GH release than either alone',
      'Maintains natural pulsatile GH pattern (more physiologic than CJC with DAC)',
      'No cortisol or prolactin elevation',
      'Available as CJC-only or pre-combined vial',
    ],
  },

  'cjc-dac': {
    overview: 'A long-acting GHRH analog with a Drug Affinity Complex (DAC) that allows it to bind to serum albumin, extending its half-life from minutes to 6-8 days. CJC-1295 with DAC provides sustained GH elevation with once or twice weekly dosing.',
    howItWorks: [
      { title: 'Albumin Binding', body: 'The DAC modification causes the peptide to bind to albumin in the bloodstream, protecting it from degradation and releasing slowly over the following week.' },
      { title: 'Sustained GH Elevation', body: 'Unlike pulsatile GH secretagogues, CJC with DAC maintains elevated baseline GH levels continuously throughout the week.' },
      { title: 'IGF-1 Elevation', body: 'Sustained GH release produces consistently elevated IGF-1, providing continuous anabolic and regenerative signaling rather than peaks and valleys.' },
    ],
    whyChoose: [
      'Twice-weekly dosing — maximum protocol convenience',
      'Sustained IGF-1 elevation without multiple daily injections',
      'Strong track record in long-term research protocols',
      'Ideal for subjects who cannot manage daily dosing schedules',
    ],
  },

  'igf-1-lr3': {
    overview: 'A modified form of Insulin-like Growth Factor-1 with an amino acid substitution and 13-amino acid N-terminal extension. These changes reduce binding to IGF binding proteins, extend the half-life from minutes to 20-30 hours, and increase potency by 2-3x over natural IGF-1.',
    howItWorks: [
      { title: 'Reduced IGFBP Binding', body: 'Structural modifications prevent binding proteins from sequestering IGF-1 LR3, allowing it to remain active in circulation far longer than natural IGF-1.' },
      { title: 'Direct Receptor Activation', body: 'Directly activates IGF-1 receptors in muscle tissue, driving protein synthesis and satellite cell activation without requiring GH conversion.' },
      { title: 'mTOR Pathway', body: 'Powerfully activates the mTOR pathway in muscle cells — the primary signaling cascade for muscle hypertrophy.' },
      { title: 'Nutrient Partitioning', body: 'Improves glucose uptake in muscle and may enhance how the body uses nutrients for muscle growth rather than fat storage.' },
    ],
    whyChoose: [
      'Direct anabolic signaling without GH conversion step',
      '20-30 hour half-life allows once-daily dosing',
      'More potent than natural IGF-1 with greater bioavailability',
      'Synergistic with GH secretagogues for maximum anabolic effect',
      'One of the most potent peptides for muscle hypertrophy research',
    ],
  },

  'ipamorelin': {
    overview: 'A pentapeptide ghrelin mimetic and the most selective growth hormone secretagogue available. Ipamorelin triggers GH pulses through ghrelin receptors without elevating cortisol, prolactin, or hunger — the cleanest GH peptide profile in its class.',
    howItWorks: [
      { title: 'Ghrelin Receptor Activation', body: 'Binds specifically to GHS-R1a receptors in the pituitary, triggering a pulsatile GH release that mimics the body\'s natural secretion pattern.' },
      { title: 'Selective GH Release', body: 'Does not affect ACTH, cortisol, or prolactin — avoiding the stress hormone elevation that compromised earlier generation GHRPs.' },
      { title: 'IGF-1 Elevation', body: 'Released GH stimulates liver IGF-1 production, mediating anabolic, fat-burning, and regenerative downstream effects.' },
    ],
    whyChoose: [
      'Cleanest side effect profile of any GH secretagogue',
      'No hunger stimulation, no cortisol — ideal for body composition research',
      'Works synergistically with CJC-1295 for amplified GH pulses',
      'Excellent long-term tolerability with minimal receptor desensitization',
      'Enhances deep sleep when dosed before bed',
    ],
  },

  'sermorelin': {
    overview: 'The first 29 amino acids of naturally occurring GHRH — the shortest fragment with full biological activity for stimulating GH release. FDA-approved for GH deficiency in children, Sermorelin works through the body\'s own regulatory systems to produce physiologically appropriate GH pulses.',
    howItWorks: [
      { title: 'GHRH Receptor Activation', body: 'Binds to GHRH receptors on pituitary somatotroph cells, triggering stored GH release in pulsatile patterns that mimic natural secretion.' },
      { title: 'Preserved Feedback', body: 'Unlike exogenous GH, Sermorelin maintains natural negative feedback mechanisms — the body self-regulates to prevent excessive GH elevation.' },
      { title: 'Pituitary Preservation', body: 'Stimulates rather than replaces natural GH production, potentially maintaining pituitary health rather than suppressing it.' },
    ],
    whyChoose: [
      'FDA-approved compound with strong clinical validation',
      'Works with natural regulatory feedback — cannot overshoot GH levels',
      'Preserves pituitary function unlike exogenous GH',
      'Cost-effective alternative to prescription human growth hormone',
      'Particularly effective when dosed before sleep to amplify natural GH pulse',
    ],
  },

  'nad-plus': {
    overview: 'Nicotinamide Adenine Dinucleotide — a coenzyme present in every cell, essential for mitochondrial energy production, DNA repair, and sirtuin (longevity gene) activation. NAD+ levels decline by up to 50% by age 50, contributing directly to age-related energy and cognitive decline.',
    howItWorks: [
      { title: 'Cellular Energy Production', body: 'Essential cofactor in the electron transport chain — without adequate NAD+, mitochondria cannot efficiently convert nutrients to ATP.' },
      { title: 'Sirtuin Activation', body: 'Required substrate for SIRT1-7 (longevity genes) which regulate metabolism, DNA repair, inflammation, and stress resistance.' },
      { title: 'DNA Repair', body: 'Consumed by PARP enzymes that repair damaged DNA. Injectable NAD+ rapidly restores levels depleted by accumulated DNA damage.' },
      { title: 'Metabolic Regulation', body: 'Influences glucose and fat metabolism, improving insulin sensitivity and metabolic flexibility.' },
    ],
    whyChoose: [
      'Direct NAD+ bypasses conversion pathways required by oral precursors (NMN, NR)',
      'Upstream of multiple longevity pathways — one molecule, many benefits',
      'Immediate energy and cognitive improvements reported within hours',
      'Strong evidence linking NAD+ decline to aging across multiple organ systems',
      'Available in 500mg and 1000mg sizes',
    ],
  },

  'ss-31': {
    overview: 'A mitochondrial-targeting tetrapeptide that concentrates in the inner mitochondrial membrane, stabilizes cardiolipin, reduces reactive oxygen species, and optimizes ATP production. SS-31 (Elamipretide) is the first peptide specifically designed to target and protect mitochondria.',
    howItWorks: [
      { title: 'Mitochondrial Targeting', body: 'Alternating aromatic-cationic structure causes SS-31 to selectively concentrate in the inner mitochondrial membrane — where energy production occurs.' },
      { title: 'Cardiolipin Stabilization', body: 'Binds to cardiolipin, a unique phospholipid critical for electron transport chain function, preventing its peroxidation and maintaining membrane integrity.' },
      { title: 'ROS Reduction', body: 'Improves electron transport efficiency, reducing reactive oxygen species production that damages mitochondria and contributes to cellular aging.' },
      { title: 'ATP Enhancement', body: 'By optimizing mitochondrial structure and function, SS-31 increases ATP output — benefiting energy-demanding tissues including heart, brain, and muscle.' },
    ],
    whyChoose: [
      'First-in-class mitochondrial-targeted peptide',
      'Addresses mitochondrial dysfunction — a hallmark of aging and disease',
      'Clinical trial data in heart failure and ischemia-reperfusion injury',
      'Benefits extend across all tissues that depend on mitochondrial energy',
      'May enhance endurance and reduce fatigue through ATP optimization',
    ],
  },

  'mots-c': {
    overview: 'A 16-amino acid peptide encoded within the mitochondrial genome — the first mitochondrial-derived peptide shown to act as a systemic signaling molecule. MOTS-c regulates metabolism, improves insulin sensitivity, and has been called an "exercise mimetic" for its metabolic effects.',
    howItWorks: [
      { title: 'AMPK Activation', body: 'Activates AMP-activated protein kinase, the cell\'s master energy sensor, promoting fat oxidation and improving metabolic health.' },
      { title: 'Insulin Sensitization', body: 'Enhances glucose uptake in muscle tissue and improves metabolic flexibility — the ability to efficiently switch between carbohydrate and fat fuel sources.' },
      { title: 'Exercise Mimetic', body: 'Replicates metabolic benefits of exercise at the cellular level, improving endurance capacity and metabolic adaptation without physical activity.' },
      { title: 'NAD+ System', body: 'Influences NAD+ metabolism and sirtuin activity, connecting mitochondrial signaling to the broader longevity pathway network.' },
    ],
    whyChoose: [
      'Unique mitochondria-to-nucleus communication molecule',
      'Improves exercise capacity and endurance in studies',
      'Restores metabolic flexibility often lost with age',
      'Affordable entry point for mitochondrial health research',
      'Available in two sizes (10mg and 40mg)',
    ],
  },

  'ara-290': {
    overview: 'An 11-amino acid peptide derived from the tissue-protective region of erythropoietin (EPO), ARA-290 selectively activates the innate repair receptor without stimulating red blood cell production. Provides EPO\'s healing and anti-inflammatory benefits without the cardiovascular risks of full EPO.',
    howItWorks: [
      { title: 'Innate Repair Receptor', body: 'Selectively binds to the beta-common receptor (βcR), activating tissue-protective pathways without engaging the erythropoietin receptor that raises hematocrit.' },
      { title: 'Anti-Inflammatory Signaling', body: 'Reduces TNF-alpha, IL-1beta, and IL-6 while promoting anti-inflammatory mediators, helping resolve chronic inflammation.' },
      { title: 'Neuroprotection', body: 'Activates protective mechanisms in neural tissue, reducing neuropathic pain through anti-inflammatory and direct nerve-protective effects.' },
      { title: 'Persistent Effects', body: 'Benefits often continue after treatment cessation, suggesting lasting tissue repair rather than symptom suppression.' },
    ],
    whyChoose: [
      'EPO\'s healing benefits without blood-thickening cardiovascular risks',
      'Clinical trial data in diabetic neuropathy with significant pain reduction',
      'Persistent effects that continue after the treatment period',
      'Unique innate repair receptor mechanism not targeted by other peptides',
      'Well-tolerated even in vulnerable populations',
    ],
  },
};

export default productDetails;
