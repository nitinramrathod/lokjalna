export const transformToOptions = (data) => {
    if (!data) return [];
  
    if (Array.isArray(data)) {
      return data.map((item) => ({
        value: item._id,
        label: item.name,
      }));
    }
  
    if (typeof data === "object" && data !== null) {
      return {
        value: data._id,
        label: data.name,
      };
    }
  
    return [];
  };