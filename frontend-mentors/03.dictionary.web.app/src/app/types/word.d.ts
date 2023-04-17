type TDefinition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example: string | null;
};

type TMeaning = {
  partOfSpeech: string;
  definitions: TDefinition[];
  synonyms: string[];
  antonyms: string[];
};

type TWord = {
  word: string;
  phonetic: string;
  meanings: TMeaning[];
  sourceUrls: string;
};
