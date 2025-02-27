import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { ArticleList } from "@/components/articles";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "drbnaXxFpWwy1k7fyHTDgJ",
      token:
        "MWMt6zRJHUcf6PFf7NedCpL6h8c49wKJqtGP7tw3dYxz5MsNTLgrWsCShKh9G6RjSqluL51gbUSSXa0D5VvA",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

PLASMIC.registerComponent(ArticleList, {
  name: "ArticleList",
  props: {
    headerText: {
      type: "string",
      defaultValue: "Articles",
      description: "The header text for the list",
    },
    maxArticles: {
      type: "number",
      defaultValue: 10,
      description: "Maximum number of articles to display (set to 0 for all)",
    },
    showCreatedAt: {
      type: "boolean",
      defaultValue: false,
      description: "Toggle to show article createdAt",
    },
    showUpdatedAt: {
      type: "boolean",
      defaultValue: false,
      description: "Toggle to show article updatedAt",
    },
    showDescription: {
      type: "boolean",
      defaultValue: false,
      description: "Toggle to show article description",
    },
    showDocumentId: {
      type: "boolean",
      defaultValue: false,
      description: "Toggle to show article documentId",
    },
  },
});
