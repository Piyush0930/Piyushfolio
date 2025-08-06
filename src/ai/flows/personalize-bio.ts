// src/ai/flows/personalize-bio.ts
'use server';

/**
 * @fileOverview A Genkit flow for personalizing the intro/summary in the hero section based on tone adjustments.
 *
 * - personalizeBio - A function that handles the bio personalization process.
 * - PersonalizeBioInput - The input type for the personalizeBio function.
 * - PersonalizeBioOutput - The return type for the personalizeBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeBioInputSchema = z.object({
  bio: z.string().describe('The original bio/summary text.'),
  tone: z
    .string()
    .describe(
      'The desired tone for the bio (e.g., casual, professional, friendly).'
    ),
});
export type PersonalizeBioInput = z.infer<typeof PersonalizeBioInputSchema>;

const PersonalizeBioOutputSchema = z.object({
  personalizedBio: z.string().describe('The AI-personalized bio text.'),
});
export type PersonalizeBioOutput = z.infer<typeof PersonalizeBioOutputSchema>;

export async function personalizeBio(input: PersonalizeBioInput): Promise<PersonalizeBioOutput> {
  return personalizeBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeBioPrompt',
  input: {schema: PersonalizeBioInputSchema},
  output: {schema: PersonalizeBioOutputSchema},
  prompt: `You are an AI assistant specializing in rewriting biographies and personal summaries.

  Please rewrite the following bio to match the specified tone.

  Original Bio: {{{bio}}}
  Tone: {{{tone}}}
  `,
});

const personalizeBioFlow = ai.defineFlow(
  {
    name: 'personalizeBioFlow',
    inputSchema: PersonalizeBioInputSchema,
    outputSchema: PersonalizeBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
