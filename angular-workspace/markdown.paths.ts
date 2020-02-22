class MarkdownRenderingPair {
  constructor(
    public pathMarkdown:string, // Path to the Markdown file
    public nameDestinationTemplate:string // Name of the destination template
  ) {
  }
}

class MarkdownRenderingData {
  constructor(
    public pathPrefixTemplate:string, // Prefix for the template and the rendered template
    public markdownRenderingPairs:MarkdownRenderingPair[] // Markdown files to be rendered into the template
  ) {
  }
}

export const RENDERING_DATA:MarkdownRenderingData[] = [
  new MarkdownRenderingData(
    'src/app/assignment-contribution-statement/assignment-contribution-statement.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignment-contribution-statement/assignment-contribution-statement.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/assignment-samples/assignment-samples.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignment-samples/assignment-samples.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/assignments/assignments.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignments/assignments.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/assignments/assignment0/assignment0.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignments/assignment0/assignment0.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/assignments/assignment1/assignment1.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignments/assignment1/assignment1.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/assignments/assignment2/assignment2.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignments/assignment2/assignment2.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/assignments/assignment3/assignment3.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignments/assignment3/assignment3.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/assignments/assignment4/assignment4.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignments/assignment4/assignment4.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/calendar/calendar.component',
    [
      new MarkdownRenderingPair(
        'src/app/calendar/calendar.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/home/home.component',
    [
      new MarkdownRenderingPair(
        'src/app/home/home.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/projects/projects.component',
    [
      new MarkdownRenderingPair(
        'src/app/projects/projects.component.content.md',
        'content'
      ),

      new MarkdownRenderingPair(
        'src/assets/projects/chaser/designresearch.md',
        'designresearch_chaser'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/doze/designresearch.md',
        'designresearch_doze'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/feedo/designresearch.md',
        'designresearch_feedo'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/fridgigotchi/designresearch.md',
        'designresearch_fridgigotchi'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/guardia/designresearch.md',
        'designresearch_guardia'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/mode/designresearch.md',
        'designresearch_mode'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/pinpoint/designresearch.md',
        'designresearch_pinpoint'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/pocketgrocer/designresearch.md',
        'designresearch_pocketgrocer'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/pocketplanner/designresearch.md',
        'designresearch_pocketplanner'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/poolbuddy/designresearch.md',
        'designresearch_poolbuddy'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/procabulary/designresearch.md',
        'designresearch_procabulary'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/reminice/designresearch.md',
        'designresearch_reminice'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/stude/designresearch.md',
        'designresearch_stude'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/tidy/designresearch.md',
        'designresearch_tidy'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/vapeweight/designresearch.md',
        'designresearch_vapeweight'
      )
    ]
  ),
];

// class MarkdownPathData {
//   constructor(
//     public pathDirectory:string, // Directory containing all the related files
//     public pathPrefix:string, // Prefix for all the related files
//     public markdownContentNames:string[] // Names of Markdown content files/templates
//   ) {
//   }
// }

// export const PATHS_DATA:MarkdownPathData[] = [
//   new MarkdownPathData(
//     'src/app/assignment-contribution-statement',
//     'assignment-contribution-statement.component',
//     ['content']
//   ),
//   new MarkdownPathData(
//     'src/app/assignment-samples',
//     'assignment-samples.component',
//     ['content']
//   ),
//   new MarkdownPathData(
//     'src/app/assignments',
//     'assignments.component',
//     ['content']
//   ),
//   new MarkdownPathData(
//     'src/app/assignments/assignment0',
//     'assignment0.component',
//     ['content']
//   ),
//   new MarkdownPathData(
//     'src/app/assignments/assignment1',
//     'assignment1.component',
//     ['content']
//   ),
//   new MarkdownPathData(
//     'src/app/assignments/assignment2',
//     'assignment2.component',
//     ['content']
//   ),
//   new MarkdownPathData(
//     'src/app/assignments/assignment3',
//     'assignment3.component',
//     ['content']
//   ),
//   new MarkdownPathData(
//     'src/app/assignments/assignment4',
//     'assignment4.component',
//     ['content']
//   ),
//   new MarkdownPathData(
//     'src/app/assignments/readings',
//     'readings.component',
//     ['content']
//   ),
//   new MarkdownPathData(
//     'src/app/calendar',
//     'calendar.component',
//     ['content']
//   ),
//   new MarkdownPathData(
//     'src/app/home',
//     'home.component',
//     ['content']
//   ),
//   new MarkdownPathData(
//     'src/app/projects',
//     'projects.component',
//     ['content']
//   ),
// ];
