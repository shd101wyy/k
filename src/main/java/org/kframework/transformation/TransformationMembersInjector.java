package org.kframework.transformation;

import java.lang.reflect.Field;

import org.kframework.utils.errorsystem.KExceptionManager;

import com.google.inject.MembersInjector;
import com.google.inject.Provider;

public class TransformationMembersInjector<T> implements MembersInjector<T> {

    private final Field field;
    private final Provider<? extends TransformationProvider<?>> provider;
    private final Provider<KExceptionManager> kem;

    public TransformationMembersInjector(Field field, Provider<? extends TransformationProvider<?>> provider, Provider<KExceptionManager> kem) {
        this.field = field;
        this.provider = provider;
        this.kem = kem;
    }

    @Override
    public void injectMembers(T t) {
        try {
            field.setAccessible(true);
            field.set(t, provider.get().get());
        } catch (IllegalArgumentException | IllegalAccessException e) {
            throw new RuntimeException("could not inject " + t, e);
        } catch (AmbiguousTransformationException | TransformationNotSatisfiedException e) {
            kem.get().registerCriticalError(e.getMessage(), e);
        }
    }

}
