export default function useVisible(initValue: boolean) {
  const visible = ref(initValue || false);

  const setVisible = (newVal: boolean) => {
    visible.value = newVal;
  };

  return {
    visible,
    setVisible,
  };
}
