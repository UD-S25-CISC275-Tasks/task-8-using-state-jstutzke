import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let published = questions.filter((q: Question) => q.published);
    return published;
}
// COMPLETE

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let newArray: Question[] = questions.filter(
        (q: Question) =>
            q.body !== "" || q.expected !== "" || q.options.length > 0
    );

    return newArray;
}
// COMPLETE

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    let quest = questions.find((q: Question) => q.id == id);
    if (quest != null) {
        return quest;
    }
    return null;
}
// COMPLETE

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    let noID: Question[] = questions.filter((q: Question) => q.id != id);
    return noID;
}
// COMPLETE

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    let names: string[] = questions.map((q: Question) => q.name);
    return names;
}
// COMPLETE

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let allPoints: number[] = questions.map((q: Question): number => q.points);
    let total: number = allPoints.reduce(
        (currentTotal: number, p: number) => currentTotal + p,
        0
    );
    return total;
}
// COMPLETE

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let pub: Question[] = questions.filter((q: Question) => q.published);
    let pointsTotal: number = sumPoints(pub);

    return pointsTotal;
}
// COMPLETE

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let header: string = "id,name,options,points,published\n";
    let qCSV = questions
        .map(
            (q: Question): string =>
                `${q.id},${q.name},${q.options.length},${q.points},${q.published}`
        )
        .join("\n");

    return header + qCSV;
}
// COMPLETE

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    let answers: Answer[] = questions.map(
        (q: Question): Answer =>
            q.id > 10
                ? {
                      questionId: q.id,
                      text: "",
                      submitted: false,
                      correct: false
                  }
                : {
                      questionId: q.id,
                      text: "",
                      submitted: false,
                      correct: false
                  }
    );

    return answers;
}
// COMPLETE

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    let newQs = questions.map(
        (q: Question): Question =>
            !q.published ? { ...q, published: true } : q
    );
    return newQs;
}
// COMPLETE

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let mapped: boolean = questions.every(
        (q: Question): boolean => q.type === questions[0].type
    );

    return mapped;
}
// COMPLETE

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    // add a blank question to the end of the array
    let blankQ: Question = makeBlankQuestion(id, name, type);
    let newQs: Question[] = [...questions, blankQ];
    return newQs;
}
// COMPLETE

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    let newQs: Question[] = questions.map(
        (q: Question): Question =>
            q.id == targetId ? { ...q, name: newName } : q
    );
    return newQs;
}
// COMPLETE

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    // q that matches targetID should change type to newQ type
    // if newQ type is not mcq, than options set to an empty list
    let newQs: Question[] = [];
    if (newQuestionType == "multiple_choice_question") {
        newQs = questions.map(
            (q: Question): Question =>
                q.id == targetId ? { ...q, type: newQuestionType } : q
        );
        return newQs;
    }
    newQs = questions.map(
        (q: Question): Question =>
            q.id == targetId ? { ...q, type: newQuestionType, options: [] } : q
    );
    return newQs;
}
// COMPLETE

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    let newArray: Question[] = questions.map((q: Question) =>
        q.id !== targetId
            ? q
            : {
                  ...q,
                  options:
                      targetOptionIndex === -1
                          ? [...q.options, newOption]
                          : q.options.map((existing, option) =>
                                option === targetOptionIndex
                                    ? newOption
                                    : existing
                            )
              }
    );

    return newArray;
}
// COMPLETE

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */

// question with target id should be duplicated and placed right after the original question
// if q.id == target id ? (duplicateQuestion(newId, q))
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    let qIndex = questions.findIndex(
        (q: Question): boolean => q.id == targetId
    );

    let quest: Question = duplicateQuestion(newId, questions[qIndex]);

    let deepCopy: Question[] = questions.map(
        (q: Question): Question => ({ ...q, options: [...q.options] })
    );

    deepCopy.splice(qIndex + 1, 0, quest);

    return deepCopy;
}

// COMPLETE
