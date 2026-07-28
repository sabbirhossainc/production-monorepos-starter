import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  (plop.setGenerator("component", {
    description: "Create a new UI component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (e.g., Input):",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/ui/src/{{kebabCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "{{ turbo.paths.root }}/packages/ui/src/{{kebabCase name}}.test.tsx",
        templateFile: "templates/component-test.hbs",
      },
      {
        type: "append",
        path: "{{ turbo.paths.root }}/packages/ui/src/index.ts",
        template: "export * from './{{kebabCase name}}'",
      },
    ],
  }),
    plop.setGenerator("package", {
      description: "Create a new shared package",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "Package name (e.g., db):",
        },
      ],
      actions: [
        {
          type: "addMany",
          destination: "{{turboRoot}}/packages/{{name}}",
          base: "templates/package",
          templateFiles: "templates/package/**",
        },
      ],
    }),
    plop.setGenerator("example", {
      description:
        "An example Turborepo generator - creates a new file at the root of the project",
      prompts: [
        {
          type: "input",
          name: "file",
          message: "What is the name of the new file to create?",
          validate: (input: string) => {
            if (input.includes(".")) {
              return "file name cannot include an extension";
            }
            if (input.includes(" ")) {
              return "file name cannot include spaces";
            }
            if (!input) {
              return "file name is required";
            }
            return true;
          },
        },
        {
          type: "list",
          name: "type",
          message: "What type of file should be created?",
          choices: [".md", ".txt"],
        },
        {
          type: "input",
          name: "title",
          message: "What should be the title of the new file?",
        },
      ],
      actions: [
        {
          type: "add",
          path: "{{ turbo.paths.root }}/{{ dashCase file }}{{ type }}",
          templateFile: "templates/turborepo-generators.hbs",
        },
      ],
    }));
}
