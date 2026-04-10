import type { Component } from 'svelte';

import SvelteIcon from '~icons/simple-icons/svelte';
import TailwindCSSIcon from '~icons/simple-icons/tailwindcss';
import FastAPIIcon from '~icons/simple-icons/fastapi';
import SQLiteIcon from '~icons/simple-icons/sqlite';
import TypeScriptIcon from '~icons/simple-icons/typescript';
import ReactIcon from '~icons/simple-icons/react';
import AxiosIcon from '~icons/simple-icons/axios';
import PostCSSIcon from '~icons/simple-icons/postcss';
import PythonIcon from '~icons/simple-icons/python';
import GoIcon from '~icons/simple-icons/go';
import SpringIcon from '~icons/simple-icons/spring';
import GitIcon from '~icons/simple-icons/git';
import JiraIcon from '~icons/simple-icons/jira';
import NotionIcon from '~icons/simple-icons/notion';
import AsanaIcon from '~icons/simple-icons/asana';
import GoogleSheetsIcon from '~icons/simple-icons/googlesheets';
import CanvaIcon from '~icons/simple-icons/canva';
import TypstIcon from '~icons/simple-icons/typst';

export const iconMap: Record<string, Component> = {
  'simple-icons:svelte': SvelteIcon,
  'simple-icons:tailwindcss': TailwindCSSIcon,
  'simple-icons:fastapi': FastAPIIcon,
  'simple-icons:sqlite': SQLiteIcon,
  'simple-icons:typescript': TypeScriptIcon,
  'simple-icons:react': ReactIcon,
  'simple-icons:axios': AxiosIcon,
  'simple-icons:postcss': PostCSSIcon,
  'simple-icons:python': PythonIcon,
  'simple-icons:go': GoIcon,
  'simple-icons:spring': SpringIcon,
  'simple-icons:git': GitIcon,
  'simple-icons:jira': JiraIcon,
  'simple-icons:notion': NotionIcon,
  'simple-icons:asana': AsanaIcon,
  'simple-icons:googlesheets': GoogleSheetsIcon,
  'simple-icons:canva': CanvaIcon,
  'simple-icons:typst': TypstIcon,
};
