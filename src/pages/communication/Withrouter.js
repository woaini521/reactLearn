
function withRouter(Component) {
    const displayName = `withRouter(${Component.displayName || Component.name})`;
    const C = props => {
        /*  获取 */
      const { wrappedComponentRef, ...remainingProps } = props;
      return (
        <RouterContext.Consumer>
          {context => {
            return (
              <Component
                {...remainingProps}
                {...context}
                ref={wrappedComponentRef}
              />
            );
          }}
        </RouterContext.Consumer>
      );
    };
  
    C.displayName = displayName;
    C.WrappedComponent = Component;
    /* 继承静态属性 */
    return hoistStatics(C, Component);
  }
  
  export default withRouter
  