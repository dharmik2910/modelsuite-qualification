const ConfirmModal = ({
    open,
    title,
    message,
    onCancel,
    onConfirm,
}) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-xl border border-white/10 bg-[#111111] p-6 shadow-2xl">
                <h2 className="text-xl font-semibold text-white mb-3">
                    {title}
                </h2>

                <p className="text-sm text-gray-400 mb-6">
                    {message}
                </p>

                <div className="flex justify-end gap-3">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded-lg border border-white/10 bg-[#1b1b1b] text-gray-300 hover:bg-[#252525]"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;