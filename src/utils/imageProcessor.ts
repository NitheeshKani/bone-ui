import fx from "glfx"

export interface ProcessOptions {
    denoise?: number
    contrast?: number
    sharpenRadius?: number
    sharpenAmount?: number
}

/**
 * Process an image with glfx.js and return a Blob
 */
export async function imageProcessor(
    img: HTMLImageElement,
    options: ProcessOptions = {}
): Promise<Blob> {
    const {
        denoise = 0,
        contrast = 0,
        sharpenRadius = 0,
        sharpenAmount = 0,
    } = options

    return new Promise((resolve) => {
        const canvas = fx.canvas()
        const texture = canvas.texture(img)

        canvas.draw(texture)
            .denoise(denoise)
            .brightnessContrast(0, contrast)
            .unsharpMask(sharpenRadius, sharpenAmount)
            .update()

        canvas.toBlob((blob: Blob) => {
            if (blob) resolve(blob)
        }, "image/png")
    })
}
