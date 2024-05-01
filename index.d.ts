/**
 * Hitbox object that VoxDestruciton uses in Moveable Hitbox
 */
interface HitboxObject {
    //Functions
    /**
     * Starts Hitbox
     */
    Start(): void;
    /**
     * Stops Hitbox
     */
    Stop(): void;
    /**
     * Returns all of the touching parts
     */
    GetTouchingParts(): Part[];
    /**
     * Weld hitbox to a part
     * @param Part Part to weld hitbox to
     */
    WeldTo(Part: Part): void;
    /**
     * Unwelds hitbox
     */
    UnWeld(): void;
    /**
     * Destroys the Hitbox
     */
    Destroy(): void;
}

/**
 * Voxel destruction module.
 */
interface VoxelDestruction{
    /**
     * Repeatedly voxelizes a part until it meets the specified voxel size
     * @param Part Part to voxel
     * @param MinimumVoxelSize Minimum possible size that Voxels can have. Module will try to match that size as accurately as possible. 5 by default.
     * @param TimeToReset Time it takes in seconds to reset voxels back to normal. Will not reset if this is less than zero. 50 by default.
     */
    VoxelizePart(Part: Part, MinimumVoxelSize?: number, TimeToReset?: number): Part[];
    /**
     * Creates one hitbox which divides any applicable parts that are touching it. Returns Voxels
     * @param Size default: (1, 1, 1)
     * @param CFrame default: (0, 0, 0)
     * @param Shape default: Block
     * @param MinimumVoxelSize default: 5. Minimum possible size that Voxels can have. Module will try to match that size as accurately as possible.
     * @param TimeToReset default: 50. Time it takes in seconds to reset voxels back to normal. Will not reset if this is less than zero.
     */
    CreateHitbox(Size?: Vector3, CFrame?: CFrame, Shape?: Enum.PartType, MinimumVoxelSize?: number, TimeToReset?: number): Part[];
    /**
     * Creates a moveable hitbox that can be controlled manually or welded to a specified part. Returns Hitbox Object
     * @param MinimumVoxelSize default: 5. Minimum possible size that Voxels can have. Module will try to match that size as accurately as possible.
     * @param TimeToReset default: 50. Time it takes in seconds to reset voxels back to normal. Will not reset if this is less than zero.
     * @param Size default: (1, 1, 1)
     * @param CFrame default: (0, 0, 0)
     * @param Shape default: Block
     */
    CreateMoveableHitbox(MinimumVoxelSize?: number, TimeToReset?: number, Size?: Vector3, CFrame?: CFrame, Shape?: Enum.PartType): HitboxObject;
    /**
     * Halves the given part, parenting them to the specified parent if there's one. Returns those halves.
     * @param Part Part to half
     * @param Parent Optional parent the halves will be parented to
     */
    CutInHalf(Part: Part, Parent?: Instance): Part[];
}

declare module "@rbxts/voxel-destruction"{
    export const VoxelDestruction: VoxelDestruction
}