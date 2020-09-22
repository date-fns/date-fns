export default function requiredArgs(required: number, args: IArguments) {
  if (args.length < required) {
    throw new TypeError(
      required +
        ' argument' +
        (required > 1 ? 's' : '') +
        ' required, but only ' +
        args.length +
        ' present'
    )
  }
}
