import { Component, ErrorInfo, ReactNode } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          😟 Ups something went wrong! —{" "}
          <strong>Try to refresh the page! 🔁</strong>
        </Alert>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
