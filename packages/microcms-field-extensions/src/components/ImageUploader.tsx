import { useState } from 'react';

type Props = {};

export const ImageUploader: React.FC<Props> = () => {
  const [imageUrl, setImageUrl] = useState<string>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImageUrl(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/png, image/jpeg, image/webp"
        onChange={onChange}
      />
      {imageUrl && <img className="w-32" src={imageUrl} alt="" />}
    </div>
  );
};
