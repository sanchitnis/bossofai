import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { 
  Metric, Chart, ROIWidget, EnrollmentCalculator, 
  SimulationEngine, InteractiveTimeline, AITutor, AskAI 
} from '@site/src/components/PresentationWidgets';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map our custom components
  Metric,
  Chart,
  ROIWidget,
  EnrollmentCalculator,
  SimulationEngine,
  InteractiveTimeline,
  AITutor,
  AskAI,
};
