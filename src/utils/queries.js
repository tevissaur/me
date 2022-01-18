import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
    query GetProjects {
        projects {
            title
            description
            repoLink
            demoLink
        }
    }

`