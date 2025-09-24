import React, { useEffect } from "react";

const withObserver =
  <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  (props: P) => {
    useEffect(() => {
      console.log(`📌 ${WrappedComponent.name} Mounted`);

      return () => {
        console.log(`❌ ${WrappedComponent.name} Unmounted`);
      };
    }, []);

    useEffect(() => {
      console.log(`🔄 ${WrappedComponent.name} Updated`, props);
    });

    return <WrappedComponent {...props} />;
  };

export { withObserver };
