export interface Choice {
  id: string;
  label: string;
  description: string;
  cost: number; // positive for expense, negative for income
  category: 'essentials' | 'transport' | 'data' | 'social' | 'emergency' | 'income' | 'savings';
  vibeChange: number; // impact on Soft Life Vibe score (-20 to +20)
  outcomeStory: string;
  wittyTakeaway: string;
  unlockedFlag?: string;
}

export interface Scenario {
  id: string;
  day: number;
  title: string;
  tagline: string;
  context: string;
  dilemma: string;
  imageIcon: string;
  choices: Choice[];
  consequenceTip: string;
}

export interface CharacterProfile {
  id: string;
  name: string;
  role: string;
  tagline: string;
  avatarUrl: string;
  startingBio: string;
}

export interface IncomeProfile {
  id: string;
  title: string;
  startingBalance: number;
  durationDays: number;
  description: string;
  badge: string;
  difficulty: 'Gentle' | 'Realistic' | 'Hardcore';
}

export interface FinancialGoal {
  id: string;
  title: string;
  targetDescription: string;
  targetSavingsPercentage: number;
}

export const CHARACTERS: CharacterProfile[] = [
  {
    id: 'tomi',
    name: 'Tomi',
    role: 'The Lifestyle Balancer',
    tagline: 'Wants soft life, but fears midnight debit alerts.',
    avatarUrl: '👨🏾‍🎓',
    startingBio: 'University student who freelances occasionally. Values good food, active data connection, and surviving until the next allowance.',
  },
  {
    id: 'chisom',
    name: 'Chisom',
    role: 'The Tech Hustler',
    tagline: 'Always online, battery at 15%, chasing dollar gigs.',
    avatarUrl: '👩🏾‍💻',
    startingBio: 'Final year student and junior UI designer. High data consumption, needs constant electricity, but generous with friends.',
  },
  {
    id: 'femi',
    name: 'Femi',
    role: 'The Social Odogwu',
    tagline: 'Never misses a departmental dinner, pays for the squad.',
    avatarUrl: '😎',
    startingBio: 'Creative director for campus events. High social battery, loves weekend outings, but often forgets transport fares for Monday.',
  },
  {
    id: 'amaka',
    name: 'Amaka',
    role: 'The Cautious Planner',
    tagline: 'Quotes PiggyVest interest rates in casual conversations.',
    avatarUrl: '👩🏾‍💼',
    startingBio: 'Accounting major who budgets down to the kobo. Rarely falls for spontaneous plans, but vulnerable to emergency family calls.',
  },
];

export const INCOME_PROFILES: IncomeProfile[] = [
  {
    id: 'student-allowance',
    title: 'Student Monthly Allowance',
    startingBalance: 35000,
    durationDays: 14,
    description: 'Strict student allowance sent from home. Must stretch across food, transport, and semester handouts.',
    badge: '₦35,000 for 14 Days',
    difficulty: 'Realistic',
  },
  {
    id: 'freelance-hustler',
    title: 'Side-Hustle Freelancer',
    startingBalance: 65000,
    durationDays: 14,
    description: 'Freelance gig payout landed. Higher starting cash, but client revisions and unexpected costs await.',
    badge: '₦65,000 for 14 Days',
    difficulty: 'Gentle',
  },
  {
    id: 'entry-level-pro',
    title: 'Naija Survival Mode (Hardcore)',
    startingBalance: 22000,
    durationDays: 14,
    description: 'Delayed allowance and urgent bills. Every kobo counts; one reckless outing means garri dinners.',
    badge: '₦22,000 for 14 Days',
    difficulty: 'Hardcore',
  },
];

export const FINANCIAL_GOALS: FinancialGoal[] = [
  {
    id: 'make-it-last',
    title: 'Finish Without Sapa',
    targetDescription: 'Survive all 14 days with at least ₦2,500 positive buffer.',
    targetSavingsPercentage: 10,
  },
  {
    id: 'rainy-day-saver',
    title: 'Save 20% Emergency Cushion',
    targetDescription: 'Keep at least 20% of your starting funds untouched in reserves.',
    targetSavingsPercentage: 20,
  },
  {
    id: 'balanced-soft-life',
    title: 'High Vibe + Financial Health',
    targetDescription: 'Maintain a Soft Life Vibe score above 65 without running into debt.',
    targetSavingsPercentage: 15,
  },
];

export const AUTHORED_SCENARIOS: Scenario[] = [
  {
    id: 'day-01-data',
    day: 1,
    title: 'The Midnight Data Disconnect',
    tagline: 'MTN just sent the dreaded 99% data consumption SMS.',
    context: 'It is Day 1 of your budget. You are about to stream coursework tutorials (and maybe some TikTok), when your service cuts off. A new 30-day bundle is needed.',
    dilemma: 'How do you renew your mobile internet connectivity?',
    imageIcon: '📶',
    consequenceTip: 'Data is oxygen for young Nigerians, but buying the top-tier plan immediately can bleed your early runway.',
    choices: [
      {
        id: 'c1-data-unlimited',
        label: 'Buy 25GB Heavyweight Plan',
        description: 'Get the full monthly bundle. High speed, zero anxiety.',
        cost: 6500,
        category: 'data',
        vibeChange: 15,
        outcomeStory: 'You renewed the heavyweight plan! Lightning fast connection, but your balance took a sharp hit on Day 1.',
        wittyTakeaway: 'Your downloads are flying, but ₦6,500 on Day 1 is bold. Protect your remaining days!',
      },
      {
        id: 'c1-data-weekly',
        label: 'Buy 7GB Weekly Workhorse',
        description: 'Budget-friendly bundle to cover essentials and messaging.',
        cost: 3000,
        category: 'data',
        vibeChange: 5,
        outcomeStory: 'Sensible compromise! You have enough data for schoolwork and essential chats.',
        wittyTakeaway: 'Calculated move: you saved ₦3,500 upfront without dropping off the grid.',
      },
      {
        id: 'c1-data-wifi',
        label: 'Rely on Campus / Café Free Wi-Fi',
        description: 'Tough it out. Sit near the library hotspot or use night bundles.',
        cost: 800,
        category: 'data',
        vibeChange: -10,
        outcomeStory: 'You only bought a night plan and hunted for campus Wi-Fi. It took 45 minutes to download a single PDF.',
        wittyTakeaway: 'Frugality champion! Your wallet smiles, but your patience was tested today.',
      },
    ],
  },
  {
    id: 'day-02-transport',
    day: 2,
    title: 'Morning Rain & The Danfo Fare Surge',
    tagline: 'The sky opened up, and the bus conductors doubled the price.',
    context: 'Heavy morning downpour in Lagos. The bus conductor is shouting twice the regular price, and Bolt rides have a 2.5x surge price.',
    dilemma: 'How are you commuting to lectures and meetings today?',
    imageIcon: '🚌',
    consequenceTip: 'Unpredictable transit fares are a staple of Nigerian urban living.',
    choices: [
      {
        id: 'c2-bolt-ride',
        label: 'Order Air-Conditioned Ride-Hailing',
        description: 'Stay clean, arrive dry, dry your shoes in comfort.',
        cost: 4500,
        category: 'transport',
        vibeChange: 15,
        outcomeStory: 'Arrived at campus like a diplomat in an air-conditioned sedan. Zero puddle splashes on your white sneakers.',
        wittyTakeaway: 'Soft life unlocked, but transport ate a chunk of this week’s provisions!',
      },
      {
        id: 'c2-danfo-hustle',
        label: 'Pay Surged Danfo Bus Fare',
        description: 'Squeeze into the yellow bus with your umbrella.',
        cost: 1600,
        category: 'transport',
        vibeChange: -5,
        outcomeStory: 'You squeezed into the bus. A bit damp around the shoulders, but you arrived on time.',
        wittyTakeaway: 'Classic Nigerian grit. You kept ₦2,900 in your pocket compared to ride-hailing.',
      },
      {
        id: 'c2-walk-pool',
        label: 'Car-Pool with Course-Mate',
        description: 'Wait 20 minutes under a shed and split a tricycle with friends.',
        cost: 700,
        category: 'transport',
        vibeChange: 0,
        outcomeStory: 'You teamed up with two coursemates, shared an umbrella, and split the tricycle fare.',
        wittyTakeaway: 'Community collaboration is the ultimate hedge against inflation.',
      },
    ],
  },
  {
    id: 'day-03-handouts',
    day: 3,
    title: 'The Mandatory Course Handout',
    tagline: '“If you don’t buy my departmental course packet, don’t enter my test.”',
    context: 'The lecturer announced the compilation packet for continuous assessment. It comes with an official stamp required for test submission.',
    dilemma: 'How do you handle this unexpected academic requirement?',
    imageIcon: '📚',
    consequenceTip: 'Mandatory academic fees cannot be skipped without consequences.',
    choices: [
      {
        id: 'c3-buy-original',
        label: 'Buy the Original Stamped Pack',
        description: 'Pay the full price and get your name registered immediately.',
        cost: 3500,
        category: 'essentials',
        vibeChange: 5,
        outcomeStory: 'Paid the class representative in cash. Receipt collected, zero academic stress.',
        wittyTakeaway: 'Essentials paid with zero friction. Peace of mind is priceless.',
      },
      {
        id: 'c3-photocopy-pair',
        label: 'Split & Photocopy with a Study Buddy',
        description: 'Photocopy the reading chapters and negotiate stamp fee later.',
        cost: 1500,
        category: 'essentials',
        vibeChange: -2,
        outcomeStory: 'You and your seatmate photocopied the key pages at the business centre.',
        wittyTakeaway: 'Resourceful, but make sure the lecturer doesn’t spot the duplicate stamp!',
      },
    ],
  },
  {
    id: 'day-04-social',
    day: 4,
    title: 'Friday Night Suya & Squad Hangout',
    tagline: '“We outside! Who is coming to the spot?”',
    context: 'It is Friday evening. The squad is assembling at the local grill spot for roasted suya, cold drinks, and storytelling.',
    dilemma: 'What is your level of participation tonight?',
    imageIcon: '🥩',
    consequenceTip: 'Social connections nurture mental health, but spontaneous peer spending adds up fast.',
    choices: [
      {
        id: 'c4-baller',
        label: 'Go All Out: Suya & Extra Drinks',
        description: 'Order two beef parcels, drinks for yourself and sponsor a side.',
        cost: 5000,
        category: 'social',
        vibeChange: 20,
        outcomeStory: 'The suya was spicy and tender, the vibes were immaculate, and everyone hailed you as Odogwu.',
        wittyTakeaway: 'Unmatched vibes! Just remember your bank account won’t sing your praises on Monday.',
      },
      {
        id: 'c4-moderate',
        label: 'Moderate Plate & Soft Drink',
        description: 'Order one parcel of suya and water/soda. Enjoy the laughter.',
        cost: 2000,
        category: 'social',
        vibeChange: 10,
        outcomeStory: 'You had a great conversation, enjoyed delicious spicy beef, and kept your spending disciplined.',
        wittyTakeaway: 'The sweet spot! Enjoyed the soft life without incinerating the weekly food budget.',
      },
      {
        id: 'c4-home',
        label: 'Stay In: Make Indomie & Watch a Movie',
        description: 'Politely pass on the outing and boil two packs of noodles with eggs.',
        cost: 600,
        category: 'essentials',
        vibeChange: -8,
        outcomeStory: 'You stayed in, cooked indomie with boiled eggs, and rewatched your favourite anime.',
        wittyTakeaway: 'Iron discipline! Saved over ₦4,000, but had a slight touch of FOMO.',
      },
    ],
  },
  {
    id: 'day-05-gig',
    day: 5,
    title: 'Freelance Gig Alert! (Income Opportunity)',
    tagline: 'A local brand needs a flyer & social media graphic by tonight.',
    context: 'A boutique in town urgently needs social media promotional banners. They are paying cash upon delivery, but you need to pay for generator power or café internet.',
    dilemma: 'Do you take the gig and cover the production overhead?',
    imageIcon: '💼',
    consequenceTip: 'Side hustles bring critical income, but sometimes require modest upfront expenses.',
    choices: [
      {
        id: 'c5-accept-boost',
        label: 'Take the Gig + Buy Generator Fuel',
        description: 'Pay ₦2,000 for power/Wi-Fi to finish the design. Earn ₦15,000!',
        cost: -13000, // Net +13,000 income!
        category: 'income',
        vibeChange: 18,
        outcomeStory: 'You burned the midnight oil, delivered 3 clean design concepts, and client transferred ₦15,000 immediately!',
        wittyTakeaway: 'Hustle paid off big time! Net cash infusion of +₦13,000 injected straight into your runway.',
      },
      {
        id: 'c5-skip-gig',
        label: 'Decline: Focus on Resting / Studying',
        description: 'You feel tired and choose to prioritize rest over working under deadline pressure.',
        cost: 0,
        category: 'social',
        vibeChange: 0,
        outcomeStory: 'You declined the client gig and slept early.',
        wittyTakeaway: 'Rest is important, but you left ₦15,000 on the table!',
      },
    ],
  },
  {
    id: 'day-06-urgent2k',
    day: 6,
    title: 'The Inevitable “Urgent 2k” Request',
    tagline: 'A WhatsApp ping from a cousin: “Abeg, borrow me something till Friday.”',
    context: 'Your childhood friend/cousin sends a message saying their ATM card is blocked and they need urgent funds for food and medication.',
    dilemma: 'How do you respond to social support requests?',
    imageIcon: '🙏🏾',
    consequenceTip: 'Black tax and mutual aid are real cultural realities in Nigeria. Set healthy boundaries.',
    choices: [
      {
        id: 'c6-send-full',
        label: 'Send ₦3,000 (Generous Gift)',
        description: 'Help them out without expecting repayment anytime soon.',
        cost: 3000,
        category: 'social',
        vibeChange: 8,
        outcomeStory: 'You transferred ₦3,000. They replied with audio blessings and prayers.',
        wittyTakeaway: 'Good karma earned! Just make sure you aren’t running charity at the expense of your own rent.',
      },
      {
        id: 'c6-send-half',
        label: 'Send ₦1,500 with Gentle Boundary',
        description: '“Things are tight on my end too, but take this small token.”',
        cost: 1500,
        category: 'social',
        vibeChange: 5,
        outcomeStory: 'You sent ₦1,500. They were grateful and appreciated your transparency.',
        wittyTakeaway: 'Pro boundary-setting: supported a loved one while guarding your emergency cushion.',
      },
      {
        id: 'c6-politely-decline',
        label: 'Politely Decline: “Account is on zero, boss”',
        description: 'Protect your funds. Explain that you are on strict survival budget.',
        cost: 0,
        category: 'social',
        vibeChange: -5,
        outcomeStory: 'You sent a heartfelt apology explaining your strict budget.',
        wittyTakeaway: 'It stings emotionally, but financial boundaries prevent you from becoming the next urgent case.',
      },
    ],
  },
  {
    id: 'day-07-food',
    day: 7,
    title: 'The Mid-Week Cooking Dilemma',
    tagline: 'You returned home exhausted. Stove gas is empty or ingredients need prep.',
    context: 'It is Day 7. Halfway through the round. You are starving after lectures. Cooking requires shopping and 45 minutes of kitchen effort.',
    dilemma: 'What are you eating tonight?',
    imageIcon: '🍲',
    consequenceTip: 'Takeout food delivery apps bleed young budgets more than any other category.',
    choices: [
      {
        id: 'c7-chowdeck',
        label: 'Order on Food App (Jollof + Turkey + Delivery)',
        description: 'Hot delivery straight to your doorstep in 30 minutes.',
        cost: 4800,
        category: 'essentials',
        vibeChange: 15,
        outcomeStory: 'Delivered hot and aromatic! The turkey was succulent, pepper sauce on point.',
        wittyTakeaway: 'Royalty treatment tonight! But ₦4,800 for a single meal is heavy on the runway.',
      },
      {
        id: 'c7-cook-pot',
        label: 'Buy Market Ingredients & Cook Big Pot of Soup/Jollof',
        description: 'Buy rice, peppers, and fish. Cook food that lasts 3 days.',
        cost: 3200,
        category: 'essentials',
        vibeChange: 5,
        outcomeStory: 'You spent 45 minutes cooking a massive pot of jollof rice with fried plantain. Food secured for 3 days!',
        wittyTakeaway: 'Masterstroke! ₦3,200 fed you tonight and covers tomorrow’s lunch and dinner too.',
      },
      {
        id: 'c7-street-mama-put',
        label: 'Eat at the Local Buka / Mama Put',
        description: 'Hot amala and ewedu or rice and beans at the corner vendor.',
        cost: 1200,
        category: 'essentials',
        vibeChange: 8,
        outcomeStory: 'Mama Put never misses! Steaming hot food with assorted meat for a fraction of the price.',
        wittyTakeaway: 'Value king! Delicious local food that honors both your stomach and your budget.',
      },
    ],
  },
  {
    id: 'day-08-phone-screen',
    day: 8,
    title: 'The Dreaded Phone Screen Drop (Emergency!)',
    tagline: 'A sharp crack on the concrete floor. The display is flickering green.',
    context: 'While rushing out of the lecture hall, your smartphone slipped out of your pocket. The glass is cracked and touch responsiveness is erratic.',
    dilemma: 'How do you address this unexpected hardware emergency?',
    imageIcon: '📱',
    consequenceTip: 'Unexpected emergencies are the #1 reason budgets derail. This tests your savings buffer.',
    choices: [
      {
        id: 'c8-fix-screen',
        label: 'Repair Screen at Computer Village / Tech Shop',
        description: 'Replace display with quality OEM glass so you can continue study and work.',
        cost: 7500,
        category: 'emergency',
        vibeChange: -8,
        outcomeStory: 'The technician fixed it in an hour. Screen looks brand new, but your wallet felt the sting.',
        wittyTakeaway: 'Ouch! Unexpected ₦7,500 hit. This is why having an emergency cushion matters.',
      },
      {
        id: 'c8-manage-patch',
        label: 'Patch with Screen Protector & Manage It',
        description: 'Put clear scotch tape/cheap protector over the cracks and endure the glitches.',
        cost: 1000,
        category: 'emergency',
        vibeChange: -12,
        outcomeStory: 'You wrapped a cheap glass guard over the spider-web cracks. Texting is tricky, but it functions.',
        wittyTakeaway: 'Guerilla budgeting! You saved ₦6,500 in cash, though typing WhatsApp messages is an adventure.',
      },
    ],
  },
  {
    id: 'day-09-subs',
    day: 9,
    title: 'Silent Subscriptions Auto-Debit',
    tagline: '“Debit Alert: Apple / Spotify / Netflix subscription renewed.”',
    context: 'Your phone vibrates with an automated billing notification for monthly streaming and cloud storage services.',
    dilemma: 'Do you keep all your entertainment subscriptions active?',
    imageIcon: '🎧',
    consequenceTip: 'Recurring subscriptions often run silently in the background unnoticed.',
    choices: [
      {
        id: 'c9-keep-subs',
        label: 'Keep All Subscriptions Active',
        description: 'Music without ads and weekend series bingeing are non-negotiable soft life.',
        cost: 3800,
        category: 'social',
        vibeChange: 10,
        outcomeStory: 'Ad-free playlists and 4K movies retained. Your study sessions have high quality soundtracks.',
        wittyTakeaway: 'Soft life maintained, but recurrent auto-debits require deliberate budgeting.',
      },
      {
        id: 'c9-downgrade-family',
        label: 'Join a Group/Family Plan with Friends',
        description: 'Split a Spotify & Netflix family plan with 4 coursemates.',
        cost: 1200,
        category: 'social',
        vibeChange: 8,
        outcomeStory: 'Joined the squad’s family tier. Same premium music, 70% cheaper.',
        wittyTakeaway: 'Genius fintech move! Shared subscription economics at work.',
      },
      {
        id: 'c9-cancel-subs',
        label: 'Cancel & Switch to Free Tiers',
        description: 'End subscriptions. Tolerate ads between songs and download podcasts on Wi-Fi.',
        cost: 0,
        category: 'social',
        vibeChange: -6,
        outcomeStory: 'Subscriptions cancelled. You survived a few annoying ads while studying.',
        wittyTakeaway: 'Pragmatic restraint: kept ₦3,800 intact for the final week.',
      },
    ],
  },
  {
    id: 'day-10-gift',
    day: 10,
    title: 'Surprise Blessing from Generous Uncle! (Income)',
    tagline: '“Send me your account number. Buy something nice for the weekend.”',
    context: 'A benevolent uncle or godparent called to check on your semester progress and sent a surprise cash gift of ₦10,000!',
    dilemma: 'How do you allocate this unexpected income windfall?',
    imageIcon: '🎉',
    consequenceTip: 'Windfalls test whether you succumb to lifestyle inflation or fortify your savings.',
    choices: [
      {
        id: 'c10-lock-savings',
        label: 'Lock 80% into Savings & Enjoy Small Treat',
        description: 'Move ₦8,000 straight into a locked savings wallet and buy ₦2,000 snacks.',
        cost: -8000, // Net +8,000 to liquid balance, remaining 2,000 spent on treat
        category: 'savings',
        vibeChange: 15,
        outcomeStory: 'You celebrated with ice cream and locked ₦8,000 away where impulsive fingers cannot reach it!',
        wittyTakeaway: 'Elite financial discipline! You enjoyed the moment and protected your future self.',
      },
      {
        id: 'c10-full-reinvest',
        label: 'Add Full ₦10,000 to General Available Runway',
        description: 'Keep all ₦10,000 in your main spending account as cushion for the final days.',
        cost: -10000, // Net +10,000
        category: 'income',
        vibeChange: 12,
        outcomeStory: 'Full ₦10,000 added to your active balance. Your stress levels plummeted!',
        wittyTakeaway: 'Healthy breathing room! Just make sure having cash in hand doesn’t tempt reckless spending.',
      },
    ],
  },
  {
    id: 'day-11-asoebi',
    day: 11,
    title: 'Departmental Dinner Ticket & Dress Code',
    tagline: 'The annual student gala is here. Tickets are closing tonight.',
    context: 'The annual end-of-semester dinner and awards night is on Saturday. Everyone is buying tickets and talking about their red carpet outfits.',
    dilemma: 'Will you attend the premier social event of the semester?',
    imageIcon: '✨',
    consequenceTip: 'Major celebratory events are memorable, but make sure your essentials are covered first.',
    choices: [
      {
        id: 'c11-attend-vip',
        label: 'Buy Dinner Ticket + Access Pass',
        description: 'Secure your entry, three-course dinner, and photo opportunities.',
        cost: 6000,
        category: 'social',
        vibeChange: 18,
        outcomeStory: 'You dressed up, took fire Instagram pictures with classmates, and ate delicious buffet food.',
        wittyTakeaway: 'Memories created! Soft life at its finest, just keep an eye on Day 14 transit fares.',
      },
      {
        id: 'c11-after-party',
        label: 'Attend Free After-Party & Watch Red Carpet',
        description: 'Skip the expensive banquet, hang out outside with friends, and join the free session.',
        cost: 1500,
        category: 'social',
        vibeChange: 8,
        outcomeStory: 'You chilled with friends outside, took pictures with the celebrants, and had a great time for cheap.',
        wittyTakeaway: 'Smart compromise: 80% of the fun for 25% of the cost.',
      },
      {
        id: 'c11-pass-event',
        label: 'Pass on the Event Entirely',
        description: 'Stay back at the hostel. Watch series and save the ₦6,000.',
        cost: 0,
        category: 'social',
        vibeChange: -8,
        outcomeStory: 'You stayed back and watched your friends’ stories on WhatsApp.',
        wittyTakeaway: 'Your bank account thanks you, even if your social battery felt a little left out.',
      },
    ],
  },
  {
    id: 'day-12-market',
    day: 12,
    title: 'Supermarket vs Open-Air Local Market',
    tagline: 'Provisions are running low. Where are you shopping?',
    context: 'You need laundry detergent, toothpaste, milk, and cooking oil to finish out the month.',
    dilemma: 'Where will you purchase your remaining household supplies?',
    imageIcon: '🛒',
    consequenceTip: 'Convenience often charges a 40% markup compared to local traditional markets.',
    choices: [
      {
        id: 'c12-supermarket',
        label: 'Shop at Fancy Air-Conditioned Mall',
        description: 'Fast barcode scanning, imported brands, peaceful aisles.',
        cost: 4500,
        category: 'essentials',
        vibeChange: 8,
        outcomeStory: 'Quick and easy shopping with cool AC, but imported brands carried premium prices.',
        wittyTakeaway: 'Convenience is sweet, but open markets offer the exact same soap for less.',
      },
      {
        id: 'c12-local-market',
        label: 'Hustle at the Traditional Open Market',
        description: 'Bargain with market women, buy locally manufactured essentials in bulk.',
        cost: 2400,
        category: 'essentials',
        vibeChange: 2,
        outcomeStory: 'You negotiated with Mama Chinedu, got an extra handful of peppers, and saved ₦2,100!',
        wittyTakeaway: 'Master negotiator badge unlocked! Street smarts triumph again.',
      },
    ],
  },
  {
    id: 'day-13-pharmacy',
    day: 13,
    title: 'The Pre-Exam Headache & Pharmacy Trip',
    tagline: 'Stress and late-night studying sparked a fever and sore throat.',
    context: 'With exams and final submissions approaching, you wake up with a heavy head and mild fever symptoms.',
    dilemma: 'How do you treat your health today?',
    imageIcon: '💊',
    consequenceTip: 'Never compromise on essential health; untreated sickness costs 5x more later.',
    choices: [
      {
        id: 'c13-proper-meds',
        label: 'Buy Tested Malaria & Pain Medication at Pharmacy',
        description: 'Consult the licensed pharmacist, get genuine medication and vitamin C.',
        cost: 3200,
        category: 'emergency',
        vibeChange: 6,
        outcomeStory: 'Taken as directed with a warm meal. By evening, your strength returned.',
        wittyTakeaway: 'Health is wealth! Investing in proper recovery was the only right choice here.',
      },
      {
        id: 'c13-paracetamol-sleep',
        label: 'Buy ₦300 Paracetamol & Sleep for 10 Hours',
        description: 'Drink warm water, take generic pain relief, and rest deeply.',
        cost: 300,
        category: 'essentials',
        vibeChange: -2,
        outcomeStory: 'You slept heavily and drank lots of water. The fever receded enough to study.',
        wittyTakeaway: 'Low cost survival, but always see a clinician if symptoms persist!',
      },
    ],
  },
  {
    id: 'day-14-finale',
    day: 14,
    title: 'Day 14: The Final Verdict & Victory Lap',
    tagline: 'You made it to the final day of the financial cycle!',
    context: 'Day 14 has arrived. You survived the surges, the data renewals, the suya nights, and the unexpected phone emergencies. You take stock of what remains.',
    dilemma: 'What is your final financial move before the next round begins?',
    imageIcon: '🏆',
    consequenceTip: 'How you finish one financial cycle sets up the momentum for the next one.',
    choices: [
      {
        id: 'c14-celebrate-treat',
        label: 'Modest Victory Treat (Suya & Ice Cream)',
        description: 'Celebrate reaching Day 14 without entering debt with a ₦2,000 treat.',
        cost: 2000,
        category: 'social',
        vibeChange: 15,
        outcomeStory: 'You celebrated a successful round with your friends. Good times well earned!',
        wittyTakeaway: 'Rewarding yourself for good discipline reinforces positive habits!',
      },
      {
        id: 'c14-roll-over',
        label: 'Roll Over 100% of Leftover Balance into Savings',
        description: 'Leave every remaining naira as a starting buffer for the upcoming month.',
        cost: 0,
        category: 'savings',
        vibeChange: 12,
        outcomeStory: 'Every leftover naira rolled over into your savings reserve. Pure financial peace.',
        wittyTakeaway: 'Odogwu mentality! You enter the next month ahead of the curve.',
      },
    ],
  },
];

export interface ArchetypeResult {
  title: string;
  badge: string;
  quote: string;
  description: string;
  recommendation: string;
}

export function determineArchetype(
  endingBalance: number,
  startingBalance: number,
  vibeScore: number,
  categorySpending: Record<string, number>
): ArchetypeResult {
  const percentRemaining = (endingBalance / startingBalance) * 100;
  const socialSpend = categorySpending['social'] || 0;
  const emergencySpend = categorySpending['emergency'] || 0;

  if (percentRemaining >= 30 && vibeScore >= 65) {
    return {
      title: 'Odogwu on Budget',
      badge: '👑',
      quote: '“Enjoyed the soft life, and the bank account is still standing tall.”',
      description: 'You demonstrated elite financial equilibrium. You indulged in social hangouts and quality food without sacrificing your safety cushion.',
      recommendation: 'Next step: Consider investing some of your recurring savings into low-risk mutual funds or yield accounts.',
    };
  }

  if (percentRemaining < 10 && vibeScore >= 75) {
    return {
      title: 'The Weekend Millionaire',
      badge: '🍾',
      quote: '“The vibes were loud, the suya was plentiful, but the runway is thin.”',
      description: 'You prioritized comfort, squad outings, and lifestyle enjoyment. The round was unforgettable, but you narrowly escaped sapa on the final days.',
      recommendation: 'Next round, try locking your essential transport and data budget at the very start of the cycle before agreeing to hangouts.',
    };
  }

  if (percentRemaining >= 20 && vibeScore < 50) {
    return {
      title: 'The Ascetic Monk',
      badge: '🧘🏾‍♂️',
      quote: '“Your money is safe, but did your soul smile this week?”',
      description: 'You said no to nearly every invitation and endured discomfort to keep every naira safe. Your balance is high, but your vibe score took a beating.',
      recommendation: 'Money is a tool to live a meaningful life. Don’t feel guilty allocating a small, guilt-free entertainment bucket each week.',
    };
  }

  if (percentRemaining <= 15) {
    return {
      title: 'Sapa Survivor',
      badge: '🛡️',
      quote: '“Bruised by fuel hikes and urgent 2ks, but still standing on Day 14!”',
      description: 'Between transport surges and emergencies, your balance came down to the wire. But you made it across the finish line without borrowing.',
      recommendation: 'Build a dedicated emergency buffer early in the round so unexpected expenses don’t derail your core food supply.',
    };
  }

  return {
    title: 'The Pragmatic Tactician',
    badge: '⚖️',
    quote: '“Calculated decisions, strategic compromises, reliable results.”',
    description: 'You made calm trade-offs: pooling rides during rain surges and buying groceries in bulk. A stable, sustainable performance.',
    recommendation: 'Keep doing what you are doing! You have developed practical financial muscles for everyday Nigerian living.',
  };
}
