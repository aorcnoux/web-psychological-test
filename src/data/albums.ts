
export interface Album {
  name: string;
  description: string;
  color: string;
  link:string;
}

export const albums: Record<string, Album> = {
  'Taylor Swift': {
    name: 'Taylor Swift',
    description: '你擁有一顆純真的心，看世界充滿希望。就像 Taylor 的出道專輯一樣，你相信童話故事的美好結局，勇敢表達情感，內心藏著滿滿的憧憬與善意。\n💚補充分析：你是那種在逆境中依然相信人性的溫暖的人，對生活保有最初的悸動與純粹。',
    color: 'from-green-400 to-blue-500',
    link: 'https://youtube.com/playlist?list=PLdXAaFXS7KDv_A4FSG4bZ_xM1gpfwlR4V&si=X5b5MWiJGT_3nl4u'
  },
  'Fearless': {
    name: 'Fearless',
    description: '你勇敢又浪漫，總是願意為愛冒險。你相信愛情的魔力，無懼受傷，真心付出也不吝嗇展現脆弱。\n💛補充分析：你的勇氣來自於信念——相信愛值得一切，哪怕是心碎，也是一種成長。',
    color: 'from-yellow-400 to-orange-500',
    link: 'https://youtube.com/playlist?list=PLINj2JJM1jxNeeZ9lih8SNd_NJEkA22u0&si=TPNQwI3SrREeFkhd'
  },
  'Speak Now': {
    name: 'Speak Now',
    description: '你獨立自主，勇於發聲。你相信「該說的話就該說出口」，不輕易妥協，總是站在真理與正義那一方。\n💜補充分析：你是靈魂的捍衛者，寧可孤單也不虛偽，是少數願意挑戰現狀、為理想挺身而出的人。',
    color: 'from-purple-400 to-pink-500',
    link: 'https://youtube.com/playlist?list=PLINj2JJM1jxMe-u0JNgqVLgV_g088jClS&si=KJ0TTkMp1S4GBp9D'
  },
  'Red': {
    name: 'Red',
    description: '你情感豐沛，熱烈又深刻。你的世界是鮮明的紅色，愛得濃烈、痛得透徹，擁抱情緒的每一個極端。\n❤️補充分析：你對人生有極高的敏感度，是體會「愛與痛共生」的人，擁有藝術家般的情感張力。',
    color: 'from-red-500 to-pink-600',
    link: 'https://youtube.com/playlist?list=PLINj2JJM1jxMjrb29kIR5WixKfVeaOaIT&si=ZD3Dj3waP0PSL2wm'
  },
  '1989': {
    name: '1989',
    description: '你自信又擁抱改變。你不怕重塑自我，懂得離開過去、打造全新的身份與人生舞台。\n🩵補充分析：你擁有都市冒險家的靈魂，總能在混亂中找到節奏，在自我蛻變中閃耀光芒。',
    color: 'from-cyan-400 to-blue-600',
    link: 'https://youtube.com/playlist?list=OLAK5uy_lglIKPOFCG5X9_Rf4Hxsmmh9GEeHL94Jo&si=ng5b8QjltJ9-kBwb'
  },
  'Reputation': {
    name: 'Reputation',
    description: '你強悍、不道歉，並擁有深沉的內在力量。你已學會保護自己，懂得善用陰影，轉化為力量與存在感。\n🖤補充分析：你是鳳凰般的存在，從誤解與傷害中重生，對外界不再討好，而是主導自己的敘事。',
    color: 'from-gray-700 to-black',
    link: 'https://youtube.com/playlist?list=OLAK5uy_kyYsExXByLh2281MMfi0QvZJF5epEUxbk&si=QMzF24puSOano9sT'
  },
  'Lover': {
    name: 'Lover',
    description: '你是無可救藥的浪漫主義者，真心相信愛能戰勝一切。你眼裡總有色彩，能在人群中散播溫暖與喜悅。\n🩷補充分析：你是理想愛情的代言人，柔軟卻不軟弱，相信世界仍值得深愛與被愛。',
    color: 'from-pink-300 to-purple-400',
    link: 'https://youtube.com/playlist?list=OLAK5uy_nHHWc9S0Nw7oLyLYBptkJ4DpkQeoL1Igw&si=O0FCp2FgRmSgTKD2'
  },
  'Folklore': {
    name: 'Folklore',
    description: '你沉靜、充滿智慧，擅長從細節中發掘人性的故事。你欣賞靜謐時光，喜歡用內心對話來理解世界。\n🩶補充分析：你如詩人般觀看人生，不急於發表意見，而是細細觀察、慢慢書寫。',
    color: 'from-gray-400 to-gray-600',
    link: 'https://youtube.com/playlist?list=OLAK5uy_nWgO-2lNMsx90439Yx0xTWCGIktUc74e8&si=0gCM1RptTR2hnKoo'
  },
  'Evermore': {
    name: 'Evermore',
    description: '你思索人生的複雜與深層意義，是個成熟而內斂的靈魂。你樂於探討那些沒有絕對答案的問題，喜歡將孤寂轉化為靈感。\n🤎補充分析：你是老靈魂，懂得欣賞悲傷中的美感，也擅長用文字或藝術與世界對話。',
    color: 'from-amber-600 to-orange-700',
    link: 'https://youtube.com/playlist?list=OLAK5uy_m-vSVOiVeY_z2lPgThmS6Nn0TJExXZtOg&si=Rs8sy9EG_5GNreHo'
  },
  'Midnights': {
    name: 'Midnights',
    description: '你神祕且內省，夜深人靜時靈感特別澎湃。你擁抱光明與黑暗的自己，經常在深夜面對最真實的情感。\n💙補充分析：你是一個夢境中的旅行者，習慣在孤獨中找到創造力，是深夜思想者的典型代表。',
    color: 'from-indigo-900 to-purple-900',
    link: 'https://youtube.com/playlist?list=OLAK5uy_kn1QevMa4cdaqnn7QI-FdoeGDaies3lAM&si=2wqhdKsK8zh4g090'
  },
  'The Tortured Poets Department': {
    name: 'The Tortured Poets Department',
    description: '你擁有藝術家靈魂，情感深沉，喜歡將痛苦轉化為作品。你不逃避黑暗，反而深入其中，從痛楚中雕刻出詩意。\n🤍補充分析：你對生命的每個裂縫都極其敏感，是個能把眼淚變成金粉的人——美與痛共存，是你的人格底色。',
    color: 'from-slate-500 to-gray-700',
    link: 'https://youtube.com/playlist?list=OLAK5uy_lFbfW_UOra8dYRTa69lxR3fxYjogNtiQw&si=zaNggwBdxJJjZoIK'
  }
};

export const calculateResult = (answers: { questionId: number; selectedOption: number }[]): Album => {
  // Simple scoring algorithm based on answer patterns
  let scores = {
    emotional: 0,    // Folklore, Evermore, TTPD
    bold: 0,         // Reputation, 1989, Red
    romantic: 0,     // Lover, Fearless, Taylor Swift
    introspective: 0 // Midnights, Speak Now
  };

  answers.forEach(answer => {
    switch (answer.selectedOption) {
      case 0: // First options tend to be emotional/introspective
        scores.emotional += 1;
        scores.introspective += 0.5;
        break;
      case 1: // Second options tend to be bold/confident
        scores.bold += 1;
        break;
      case 2: // Third options tend to be romantic/mature
        scores.romantic += 1;
        break;
    }
  });

  // Determine which album based on highest scores
  const maxScore = Math.max(...Object.values(scores));
  
  if (scores.emotional === maxScore) {
    if (scores.introspective > 3) return albums['The Tortured Poets Department'];
    if (scores.romantic > 2) return albums['Evermore'];
    return albums['Folklore'];
  }
  
  if (scores.bold === maxScore) {
    if (scores.emotional > 2) return albums['Red'];
    if (scores.introspective > 2) return albums['Reputation'];
    return albums['1989'];
  }
  
  if (scores.romantic === maxScore) {
    if (scores.bold > 2) return albums['Lover'];
    if (scores.emotional > 2) return albums['Fearless'];
    return albums['Taylor Swift'];
  }
  
  if (scores.introspective === maxScore) {
    if (scores.emotional > 3) return albums['Midnights'];
    return albums['Speak Now'];
  }

  // Fallback
  return albums['Lover'];
};
