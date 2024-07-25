import _ from "lodash";

//get forms validation errors
export const getFormErrorMessage = (name, errors, obj = null) => {

  if (!_.isNull(obj))
    return (
      errors?.[obj]?.[name] && (
        <small className="text-danger fw-bold p-error">
          {errors?.[obj]?.[name]?.message}
        </small>
      )
    );
  else
    return (
      errors?.[name] && (
        <small className="text-danger fw-bold p-error">
          {errors?.[name]?.message}
        </small>
      )
    );
};

export const skillsOptions = {
  en: [
    { label: "painting", value: "painting" },
    { label: "dancing", value: "dancing" },
    { label: "writing", value: "writing" },
    { label: "singing", value: "singing" },
    { label: "sculpting", value: "sculpting" },
    { label: "musical skills", value: "musical skills" },
    { label: "content creation", value: "content creation" },
    { label: "budgeting", value: "budgeting" },
    { label: "self-defense", value: "self-defense" },
    { label: "researching", value: "researching" },
    { label: "training", value: "training" },
    { label: "cooking", value: "cooking" },
    { label: "others", value: "others" },
  ],
  ar: [
    { label: "الرسم", value: "painting" },
    { label: "الرقص", value: "dancing" },
    { label: "الكتابة", value: "writing" },
    { label: "الغناء", value: "singing" },
    { label: "النحت", value: "sculpting" },
    { label: "المهارات الموسيقية", value: "musical skills" },
    { label: "إنشاء المحتوى", value: "content creation" },
    { label: "وضع الميزانيات", value: "budgeting" },
    { label: "الدفاع عن النفس", value: "self-defense" },
    { label: "البحث", value: "researching" },
    { label: "التدريب", value: "training" },
    { label: "الطبخ", value: "cooking" },
    { label: "أخرى", value: "others" }
  ]
}

export const drivingOptions = {
  en: [
    { label: "car", value: "car" },
    { label: "bike", value: "bike" },
    { label: "bus ", value: "bus " },
  ],
  ar: [
    { label: "سيارة", value: "car" },
    { label: "دراجة", value: "bike" },
    { label: "حافلة", value: "bus" }
  ]
}

export const diseasesOptions = {
  en: [
    { label: "Diabetes", value: "Diabetes" },
    { label: " Hypertension (High Blood Pressure)", value: "Hypertension (High Blood Pressure)" },
    { label: "Mobility Impairment (Wheelchair Use, Amputation)", value: "Asthma" },
    { label: "Chronic Obstructive Pulmonary Disease (COPD) ", value: "Chronic Obstructive Pulmonary Disease (COPD)" },
    { label: "Arthritis", value: "Arthritis" },
    { label: "Heart Disease ", value: "Heart Disease" },
    { label: "Chronic Kidney Disease", value: "Chronic Kidney Disease" },
    { label: "Alzheimer's Disease ", value: "Alzheimer's Disease" },
    { label: "Parkinson's Disease ", value: "Parkinson's Disease" },
    { label: "Osteoporosis ", value: "Osteoporosis" },
    { label: "Hepatitis B and C", value: "Hepatitis B and C" },
    { label: "Crohn's Disease", value: "Crohn's Disease" },
    { label: "Ulcerative Colitis", value: "Ulcerative Colitis" },
    { label: "Multiple Sclerosis", value: "Multiple Sclerosis" },
    { label: "Lupus", value: "Lupus" },
    { label: "HIV/AIDS", value: "HIV/AIDS" },
    { label: "Epilepsy", value: "Epilepsy" },
    { label: "Cystic Fibrosis", value: "Cystic Fibrosis" },
    { label: "Psoriasis", value: "Psoriasis" },
    { label: "Cancer", value: "Cancer" },
  ],
  ar: [
    { label: "داء السكري", value: "Diabetes" },
    { label: "ارتفاع ضغط الدم", value: "Hypertension (High Blood Pressure)" },
    { label: "الربو", value: "Asthma" },
    { label: "مرض الانسداد الرئوي المزمن (COPD)", value: "Chronic Obstructive Pulmonary Disease (COPD)" },
    { label: "التهاب المفاصل", value: "Arthritis" },
    { label: "أمراض القلب", value: "Heart Disease" },
    { label: "مرض الكلى المزمن", value: "Chronic Kidney Disease" },
    { label: "مرض الزهايمر", value: "Alzheimer's Disease" },
    { label: "مرض باركنسون", value: "Parkinson's Disease" },
    { label: "هشاشة العظام", value: "Osteoporosis" },
    { label: "التهاب الكبد B و C", value: "Hepatitis B and C" },
    { label: "مرض كرون", value: "Crohn's Disease" },
    { label: "التهاب القولون التقرحي", value: "Ulcerative Colitis" },
    { label: "التصلب المتعدد", value: "Multiple Sclerosis" },
    { label: "الذئبة", value: "Lupus" },
    { label: "فيروس نقص المناعة البشرية/الإيدز", value: "HIV/AIDS" },
    { label: "الصرع", value: "Epilepsy" },
    { label: "التليف الكيسي", value: "Cystic Fibrosis" },
    { label: "الصدفية", value: "Psoriasis" },
    { label: "السرطان", value: "Cancer" }
  ]
}

export const disabilitiesOptions = {
  en: [
    { label: "Visual Impairment (Blindness, Low Vision)", value: "Visual Impairment (Blindness, Low Vision)" },
    { label: "Hearing Impairment (Deafness, Hard of Hearing)", value: "Hearing Impairment (Deafness, Hard of Hearing)" },
    { label: "Mobility Impairment (Wheelchair Use, Amputation)", value: "Mobility Impairment (Wheelchair Use, Amputation)" },
    { label: "Intellectual Disability (Developmental Disability)", value: "Intellectual Disability (Developmental Disability)" },
    { label: "Learning Disability (Dyslexia, ADHD)", value: "Learning Disability (Dyslexia, ADHD)" },
    { label: "Speech Impairment (Stuttering, Apraxia)", value: "Speech Impairment (Stuttering, Apraxia)" },
    { label: "Autism Spectrum Disorder", value: "Autism Spectrum Disorder" },
    { label: "Cerebral Palsy ", value: "Cerebral Palsy" },
    { label: "Down Syndrome", value: "Down Syndrome" },
    { label: "Muscular Dystrophy ", value: "Muscular Dystrophy" },
    { label: "Spinal Cord Injury", value: "Spinal Cord Injury" },
    { label: "Traumatic Brain Injury (TBI)", value: "Traumatic Brain Injury (TBI)" },
    { label: "Epilepsy", value: "Epilepsy" },
    { label: "Chronic Illnesses causing Disability (e.g., Multiple Sclerosis)", value: "Chronic Illnesses causing Disability (e.g., Multiple Sclerosis)" },
    { label: "others", value: "others" },

  ],
  ar: [
    { label: "إعاقة بصرية (العمى، ضعف البصر)", value: "Visual Impairment (Blindness, Low Vision)" },
    { label: "إعاقة سمعية (الصمم، ضعف السمع)", value: "Hearing Impairment (Deafness, Hard of Hearing)" },
    { label: "إعاقة حركية (استخدام الكرسي المتحرك، البتر)", value: "Mobility Impairment (Wheelchair Use, Amputation)" },
    { label: "إعاقة عقلية (إعاقة تنموية)", value: "Intellectual Disability (Developmental Disability)" },
    { label: "صعوبة التعلم (عسر القراءة، اضطراب فرط الحركة ونقص الانتباه)", value: "Learning Disability (Dyslexia, ADHD)" },
    { label: "إعاقة الكلام (التأتأة، تعذر الأداء)", value: "Speech Impairment (Stuttering, Apraxia)" },
    { label: "اضطراب طيف التوحد", value: "Autism Spectrum Disorder" },
    { label: "الشلل الدماغي", value: "Cerebral Palsy" },
    { label: "متلازمة داون", value: "Down Syndrome" },
    { label: "الحثل العضلي", value: "Muscular Dystrophy" },
    { label: "إصابة الحبل الشوكي", value: "Spinal Cord Injury" },
    { label: "إصابة الدماغ الرضحية (TBI)", value: "Traumatic Brain Injury (TBI)" },
    { label: "الصرع", value: "Epilepsy" },
    { label: "الأمراض المزمنة التي تسبب الإعاقة (مثل التصلب المتعدد)", value: "Chronic Illnesses causing Disability (e.g., Multiple Sclerosis)" },
    { label: "أخرى", value: "others" }
  ]
}

export const disordersOptions = {
  en:
    [
      { label: "Depression", value: "Depression" },
      { label: "Anxiety Disorders (Generalized Anxiety Disorder, Panic Disorder, Phobias)", value: "Anxiety Disorders (Generalized Anxiety Disorder, Panic Disorder, Phobias)" },
      { label: "Bipolar Disorder", value: "Bipolar Disorder" },
      { label: "Obsessive-Compulsive Disorder (OCD)", value: "Obsessive-Compulsive Disorder (OCD)" },
      { label: "Post-Traumatic Stress Disorder (PTSD)", value: "Post-Traumatic Stress Disorder (PTSD)" },
      { label: "Schizophrenia", value: "Schizophrenia" },
      { label: "Eating Disorders (Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorder)", value: "Eating Disorders (Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorder)" },
      { label: "Attention-Deficit/Hyperactivity Disorder (ADHD)", value: "Attention-Deficit/Hyperactivity Disorder (ADHD)" },
      { label: "Autism Spectrum Disorder (ASD)", value: "Autism Spectrum Disorder (ASD)" },
      { label: "Borderline Personality Disorder (BPD)", value: "Borderline Personality Disorder (BPD)" },
      { label: "Dissociative Disorders (Dissociative Identity Disorder, Dissociative Amnesia)", value: "Dissociative Disorders (Dissociative Identity Disorder, Dissociative Amnesia)" },
      { label: "Substance Use Disorders (Alcoholism, Drug Addiction)", value: "Substance Use Disorders (Alcoholism, Drug Addiction)" },
      { label: "Sleep Disorders (Insomnia, Narcolepsy)", value: "Sleep Disorders (Insomnia, Narcolepsy)" },
      { label: "Personality Disorders (Antisocial Personality Disorder, Narcissistic Personality Disorder)", value: "Personality Disorders (Antisocial Personality Disorder, Narcissistic Personality Disorder)" },
      { label: "Specific Learning Disorders (Dyslexia, Dyscalculia)", value: "Specific Learning Disorders (Dyslexia, Dyscalculia)" },
      { label: "Adjustment Disorders", value: "Adjustment Disorders" },
      { label: "Gender Dysphoria", value: "Gender Dysphoria" },
      { label: "Hoarding Disorder", value: "Hoarding Disorder" },
      { label: "Trichotillomania (Hair-Pulling Disorder)", value: "Trichotillomania (Hair-Pulling Disorder)" },
      { label: "Body Dysmorphic Disorder", value: "Body Dysmorphic Disorder" },
      { label: "Other", value: "Other" }
    ]
  ,
  ar: [
    { label: "الاكتئاب", value: "Depression" },
    { label: "اضطرابات القلق (القلق العام، اضطراب الهلع، الفوبيا)", value: "Anxiety Disorders (Generalized Anxiety Disorder, Panic Disorder, Phobias)" },
    { label: "اضطراب ثنائي القطب", value: "Bipolar Disorder" },
    { label: "اضطراب الوسواس القهري (OCD)", value: "Obsessive-Compulsive Disorder (OCD)" },
    { label: "اضطراب ما بعد الصدمة (PTSD)", value: "Post-Traumatic Stress Disorder (PTSD)" },
    { label: "الفصام", value: "Schizophrenia" },
    { label: "اضطرابات الأكل (فقدان الشهية العصبي، الشره المرضي العصبي، اضطراب الأكل بنهم)", value: "Eating Disorders (Anorexia Nervosa, Bulimia Nervosa, Binge Eating Disorder)" },
    { label: "اضطراب نقص الانتباه مع فرط النشاط (ADHD)", value: "Attention-Deficit/Hyperactivity Disorder (ADHD)" },
    { label: "اضطراب طيف التوحد (ASD)", value: "Autism Spectrum Disorder (ASD)" },
    { label: "اضطراب الشخصية الحدية (BPD)", value: "Borderline Personality Disorder (BPD)" },
    { label: "اضطرابات تفككية (اضطراب الهوية التفككية، فقدان الذاكرة التفككي)", value: "Dissociative Disorders (Dissociative Identity Disorder, Dissociative Amnesia)" },
    { label: "اضطرابات تعاطي المواد (الكحولية، إدمان المخدرات)", value: "Substance Use Disorders (Alcoholism, Drug Addiction)" },
    { label: "اضطرابات النوم (الأرق، Narcolepsy)", value: "Sleep Disorders (Insomnia, Narcolepsy)" },
    { label: "اضطرابات الشخصية (اضطراب الشخصية المعادية للمجتمع، اضطراب الشخصية النرجسية)", value: "Personality Disorders (Antisocial Personality Disorder, Narcissistic Personality Disorder)" },
    { label: "اضطرابات التعلم المحددة (عسر القراءة، عسر الحساب)", value: "Specific Learning Disorders (Dyslexia, Dyscalculia)" },
    { label: "اضطرابات التكيف", value: "Adjustment Disorders" },
    { label: "اضطراب الهوية الجنسية", value: "Gender Dysphoria" },
    { label: "اضطراب التخزين", value: "Hoarding Disorder" },
    { label: "التريشوتيلومانيا (اضطراب نتف الشعر)", value: "Trichotillomania (Hair-Pulling Disorder)" },
    { label: "اضطراب تشوه الجسم", value: "Body Dysmorphic Disorder" },
    { label: "أخرى", value: "Other" }
  ]
}

export const phobiaOptions = {
  en: [
    { label: "Arachnophobia - Fear of spiders", value: "Arachnophobia - Fear of spiders" },
    { label: "Acrophobia - Fear of heights", value: "Acrophobia - Fear of heights" },
    { label: "Claustrophobia - Fear of confined spaces", value: "Claustrophobia - Fear of confined spaces" },
    { label: "Agoraphobia - Fear of open or crowded spaces", value: "Agoraphobia - Fear of open or crowded spaces" },
    { label: "Ophidiophobia - Fear of snakes", value: "Ophidiophobia - Fear of snakes" },
    { label: "Cynophobia - Fear of dogs", value: "Cynophobia - Fear of dogs" },
    { label: "Trypophobia - Fear of irregular patterns or clusters of small holes or bumps", value: "Trypophobia - Fear of irregular patterns or clusters of small holes or bumps" },
    { label: "Social Phobia (Social Anxiety Disorder) - Fear of social situations or interaction with others", value: "Social Phobia (Social Anxiety Disorder) - Fear of social situations or interaction with others" },
    { label: "Glossophobia - Fear of public speaking", value: "Glossophobia - Fear of public speaking" },
    { label: "Emetophobia - Fear of vomiting", value: "Emetophobia - Fear of vomiting" },
    { label: "Thanatophobia - Fear of death or dying", value: "Thanatophobia - Fear of death or dying" },
    { label: "Hemophobia - Fear of blood", value: "Hemophobia - Fear of blood" },
    { label: "Nyctophobia - Fear of darkness or night", value: "Nyctophobia - Fear of darkness or night" },
    { label: "Mysophobia - Fear of germs or dirt", value: "Mysophobia - Fear of germs or dirt" },
    { label: "Astraphobia - Fear of thunder and lightning", value: "Astraphobia - Fear of thunder and lightning" },
    { label: "Triskaidekaphobia - Fear of the number 13", value: "Triskaidekaphobia - Fear of the number 13" },
    { label: "Nomophobia - Fear of being without a mobile phone", value: "Nomophobia - Fear of being without a mobile phone" },
    { label: "Xenophobia - Fear of strangers or foreigners", value: "Xenophobia - Fear of strangers or foreigners" },
    { label: "Erythrophobia - Fear of blushing or the color red", value: "Erythrophobia - Fear of blushing or the color red" },
    { label: "Aquaphobia - Fear of water", value: "Aquaphobia - Fear of water" },
    { label: "Other", value: "Other" }
  ]
  ,
  ar: [
    { label: "رهاب العناكب - خوف من العناكب", value: "Arachnophobia - Fear of spiders" },
    { label: "رهاب المرتفعات - خوف من الارتفاعات", value: "Acrophobia - Fear of heights" },
    { label: "رهاب الأماكن المغلقة - خوف من الأماكن الضيقة", value: "Claustrophobia - Fear of confined spaces" },
    { label: "رهاب الأماكن المفتوحة أو المزدحمة - خوف من الأماكن المفتوحة أو المزدحمة", value: "Agoraphobia - Fear of open or crowded spaces" },
    { label: "رهاب الثعابين - خوف من الثعابين", value: "Ophidiophobia - Fear of snakes" },
    { label: "رهاب الكلاب - خوف من الكلاب", value: "Cynophobia - Fear of dogs" },
    { label: "رهاب النمط غير المنتظم أو الكتل الصغيرة من الثقوب أو التكتلات - خوف من الأنماط غير المنتظمة أو الكتل الصغيرة من الثقوب أو النتوءات", value: "Trypophobia - Fear of irregular patterns or clusters of small holes or bumps" },
    { label: "رهاب المواقف الاجتماعية (اضطراب القلق الاجتماعي) - خوف من المواقف الاجتماعية أو التفاعل مع الآخرين", value: "Social Phobia (Social Anxiety Disorder) - Fear of social situations or interaction with others" },
    { label: "رهاب التحدث أمام الجمهور - خوف من التحدث أمام الجمهور", value: "Glossophobia - Fear of public speaking" },
    { label: "رهاب القيء - خوف من القيء", value: "Emetophobia - Fear of vomiting" },
    { label: "رهاب الموت - خوف من الموت أو الاحتضار", value: "Thanatophobia - Fear of death or dying" },
    { label: "رهاب الدم - خوف من الدم", value: "Hemophobia - Fear of blood" },
    { label: "رهاب الظلام أو الليل - خوف من الظلام أو الليل", value: "Nyctophobia - Fear of darkness or night" },
    { label: "رهاب الجراثيم أو الأوساخ - خوف من الجراثيم أو الأوساخ", value: "Mysophobia - Fear of germs or dirt" },
    { label: "رهاب الرعد والبرق - خوف من الرعد والبرق", value: "Astraphobia - Fear of thunder and lightning" },
    { label: "رهاب الرقم 13 - خوف من الرقم 13", value: "Triskaidekaphobia - Fear of the number 13" },
    { label: "رهاب عدم وجود هاتف محمول - خوف من عدم وجود هاتف محمول", value: "Nomophobia - Fear of being without a mobile phone" },
    { label: "رهاب الغرباء أو الأجانب - خوف من الغرباء أو الأجانب", value: "Xenophobia - Fear of strangers or foreigners" },
    { label: "رهاب الاحمرار أو اللون الأحمر - خوف من الاحمرار أو اللون الأحمر", value: "Erythrophobia - Fear of blushing or the color red" },
    { label: "رهاب الماء - خوف من الماء", value: "Aquaphobia - Fear of water" },
    { label: "أخرى", value: "Other" }
  ]
}